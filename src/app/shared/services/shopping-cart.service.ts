import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Products } from '../models/Product';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(private database:AngularFireDatabase) { }

  async addToCart(product:Products){
    this.updateItem(product,1);
  }

  async removeFromCart(product:Products){
    this.updateItem(product,-1);
  }

  private async updateItem(product:Products, change:number){
    let cartId = await this.getOrCreateCart();
    let item$ =  this.getItem(cartId,product.$key);
    item$.take(1).subscribe((item:any) => {
      let quantity = (item.quantity || 0) + change
      if(quantity == 0) item$.remove();
      
      else item$.update({
        title:product.title ,   
        imageUrl:product.imageUrl,
        price:product.price,
        quantity: quantity
      });
    });
  }

  async getCart():Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCart();
    return this.database.object('/shopping-carts/' + cartId)
    .map((x: any) => new ShoppingCart(x.items));
  }

  async clearCart(){
    let cartId = await this.getOrCreateCart();
    this.database.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create(){
   return this.database.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }


  private getItem(cartId:string , productId:string){
    return this.database.object('/shopping-carts/' + cartId + '/items/' + productId);
  }


  private async getOrCreateCart():Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId

      let result = this.create();
      localStorage.setItem('cartId' , result.key)
      return result.key;
      // this.create().then(result => {
      //   localStorage.setItem('cartId' , result.key)

        // Add product to cart
      // })
  }


}
