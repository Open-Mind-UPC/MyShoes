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
  newShoe: Shoes = {
    name: 'Nike Air',
    price: 200,
    size: 9,
    category_id: 1,
    collection_id: 1,
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ac4e14df-8c56-4a37-bfac-a76aa02f84bf/calzado-f%C3%A1cil-de-poner-y-quitar-talla-peque%C3%B1a-run-flow-FNhFxt.png'
  };
  constructor(private shoesService: ShoesService) {
  }
  ngOnInit() {
    this.shoesService.initShoes().subscribe((data: any) => {
      this.shoes = data;
    });
  }
}
