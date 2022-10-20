import { Injectable } from '@angular/core';
import { cart } from '../shared/modal/cart';
import { foods } from '../shared/modal/food';
// import { cartItem } from '../shared/modal/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart=new cart();
  // cartItem: any; //error occur due to the line no 19 cartItem if you feel stuck in future due to this cartItem then reomove cartItem:any and this.cartItem from line no 19
 
  addToCart(food:foods):void{
    let cartItem=this.cart.items.find(item=>item.food.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1);
      return;
    }
    // this.cart.items.push(new this.cartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id !=foodId)
  }
  changeQuantity(quantity:number,foodId:number){
    let cartItem=this.cart.items.find(item=>item.food.id===foodId)
    if(!cartItem)return;
    cartItem.quantity=quantity;
  }
  getCart():cart{
    return this.cart;
  }
}
