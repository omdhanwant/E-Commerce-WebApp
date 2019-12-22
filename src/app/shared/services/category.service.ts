import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private database:AngularFireDatabase) { }

  getCategories(){
    return this.database.list('/categories',{
      query:{
        orderByChild:'name'
      }
    });
  }
}
