import { ShoppingCartItems } from './shopping-cart-items';
import { Products } from './Product';

export class ShoppingCart{
    
    items:ShoppingCartItems[]=[];

    constructor(private cartItemsMap:{[productId:string]:ShoppingCartItems }){
        this.cartItemsMap = this.cartItemsMap ||  {};
        for(let productId in cartItemsMap){
            let item = cartItemsMap[productId]            
            this.items.push(new ShoppingCartItems({...item,$key:productId}));
        }
    }

    get productIds(){
        return Object.keys(this.items)
    }

    get totalItemsCount(){
        let shoppingCartItemCount = 0;
        for(let item of this.items)
            shoppingCartItemCount += item.quantity;

        return shoppingCartItemCount;
    }

    get totalPrice(){
        let sum =0;
        for(let item of this.items){
            sum+= item.totalPrice;
        }
        return sum
    }


  getQuantity(product:Products){
    let item = this.cartItemsMap[product.$key];
    return item ? item.quantity : 0;
  }
    
}