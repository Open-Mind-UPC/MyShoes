import {Component, Input, OnInit} from '@angular/core';
import {ShoesService} from "../../../shared/services/shoes/shoes.service";
import {Shoes} from "../../model/shoes";

@Component({
  selector: 'app-list-shoes',
  templateUrl: './list-shoes.component.html',
  styleUrls: ['./list-shoes.component.css']
})
export class ListShoesComponent implements OnInit{
  title = 'shoes';
  @Input() shoes: Array<any>= [];
  constructor(private shoesService: ShoesService) {
  }
  ngOnInit() {
    this.shoesService.getShoes().subscribe((data: any) => {
      this.shoes = data.content;
    });
  }
}
