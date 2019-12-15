import { Products } from './Product';

export class ShoppingCartItems{
    $key:string
    title:string
    imageUrl:string
    price:number
    quantity:number

    constructor(init:Partial<ShoppingCartItems>){
        Object.assign(this,init);
    }

    get totalPrice(){
        return this.price * this.quantity
    }
}