import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { foods } from '../shared/modal/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
 food!:foods;
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService, private cartService:CartService,private router:Router) {
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=this.foodService.getFoodById(params['id'])
    })
   }

   addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
   }

  ngOnInit(): void {
  }

}
