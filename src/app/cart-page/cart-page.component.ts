import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


import { cart } from '../shared/modal/cart';
import { cartItem } from '../shared/modal/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
   
  cart!:cart;
  constructor(private cartServices:CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  removeFromCart(cartItem:cartItem){
    this.cartServices.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartItem,quantityInString:string){
     const quantity=parseInt(quantityInString);
     this.cartServices.changeQuantity(cartItem.food.id,quantity)
     this.setCart();
  }
  
  setCart(){
   this.cart=this.cartServices.getCart();
  }

}
