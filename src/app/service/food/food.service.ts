import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/modal/food';
import { tag } from 'src/app/shared/modal/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAllTags(_tag:string):foods[]
  {
    return _tag=='All'?this.getAllImage():this.getAllImage().filter(food=>food.name?.includes(_tag))

  }
 DisplayAllTag():tag[]{
  return [
    
    {  name:'All', count:8 },
    {  name:'FastFood', count:4 },
    {  name:'Pizza', count:3 },
    {  name:'Burger', count:4 },
    {  name:'Soup', count:1 },
    {  name:'Humburger', count:2 },
    {  name:'Fry', count:1 },
  
    
  ]
 }

  constructor() { }

  getFoodById(id:number):foods{
     return this.getAllImage().find(food=>food.id==id)!;
  }   

  getAllImage():foods[]{
    return[
      {
        id: 1,
        price:10,
        name:'Pizza Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/food-6.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 2,
        price:10,
        name:'Potato Corn Burger',
        favourite:false,
        star:3,
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/fodd-2.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 3,
        price:10,
        name:'Pizza',
        favourite:false,
        star:4.5,
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/food-3.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 4,
        price:10,
        name:'Stuffed Bean Burger',
        favourite:false,
        star:4.5,
        tags:['fastfood','Pizza','lunch'],
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
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/food-5.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 6,
        price:10,
        name:'Detroit Pizza',
        favourite:false,
        star:4.5,
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/food-1.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 7,
        price:10,
        name:'Sicilian Pizza',
        favourite:false,
        star:4.5,
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/food-7.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      {
        id: 8,
        price:10,
        name:'Soup',
        favourite:false,
        star:4.5,
        tags:['fastfood','Pizza','lunch'],
        imageUrl:'/assets/food-8.jpg',
        cocktime:'20 to 30 Minutes',
        origins:['Pakistani','Indian','Italian']
      },
      
    ]
  }
   
  
    
  
}
