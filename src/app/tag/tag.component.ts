import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { tag } from '../shared/modal/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  foodPageTage?:string[];
  tags:tag[]=[];
  constructor( private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTage)
    this.tags=this.fs.DisplayAllTag();
  }

}
