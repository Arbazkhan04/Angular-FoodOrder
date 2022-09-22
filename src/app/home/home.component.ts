import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { foods } from '../shared/modal/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getDataFromFoodService:foods[]=[]
  constructor( private fs:FoodService ) { }

  ngOnInit(): void {
     this.getDataFromFoodService=this.fs.getAllImage();
  }

}
