import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/modal/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllImage():foods[]{
    return[
      {
        id: 1,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-1.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 2,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:3,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/fodd-2.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 3,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-3.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 4,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-4.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 5,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-5.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 6,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-6.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 7,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-7.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 8,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'/assets/food-8.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      
    ]
  }
   
  
    
  
}
