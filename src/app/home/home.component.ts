import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { foods } from '../shared/modal/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getDataFromFoodService:foods[]=[];
  constructor( private fs:FoodService, private route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      if(params['searchItem'])
       
          this.getDataFromFoodService=this.fs.getAllImage().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));

       else if(params['tags'])
       this.getDataFromFoodService=this.fs.getAllTags(params['tags'])
      else
      
        this.getDataFromFoodService=this.fs.getAllImage();
      
    })


    
  }

}
