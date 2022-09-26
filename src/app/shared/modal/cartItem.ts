import { foods } from "./food";

export class cartItem{
    food: foods;
    quantity:number=1;
    constructor(food:foods){
        this.food=food
    }
    get Price():number{ //js modern way to write functiion with the help of getter and setter
        return this.food.price*this.quantity;
    }


}