import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>
  
  constructor(private afAuth:AngularFireAuth,private route:ActivatedRoute,private userServie:UserService) {
    this.user$ = this.afAuth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    sessionStorage.setItem('returnUrl' , returnUrl)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }


  get appUser$():Observable<AppUser>{
    return this.user$.switchMap(user => user ? this.userServie.get(user.uid) :Observable.of(null))
  }
}
