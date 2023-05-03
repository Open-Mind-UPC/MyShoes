import {Component, Input, OnInit} from '@angular/core';
import {ShoesServiceService} from "../../services/shoes-service.service";

@Component({
  selector: 'app-list-shoes',
  templateUrl: './list-shoes.component.html',
  styleUrls: ['./list-shoes.component.css']
})
export class ListShoesComponent implements OnInit{
  title = 'shoes';
  @Input() shoes: Array<any>= [];
  constructor(private shoesService: ShoesServiceService) {
  }
  ngOnInit() {
    this.shoesService.initShoes().subscribe((data: any) => {
      this.shoes = data;
    });
  }
}
