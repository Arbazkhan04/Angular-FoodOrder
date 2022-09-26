import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { tag } from '../shared/modal/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  tags:tag[]=[];
  constructor( private fs:FoodService) { }

  ngOnInit(): void {
    this.tags=this.fs.DisplayAllTag();
  }

}
