import { Component } from '@angular/core';
import {ShoesService} from "../../../shared/services/shoes/shoes.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  shoes: Array<any> = [];
  constructor(private shoesService: ShoesService) {
    this.shoesService.initShoes().subscribe((data: any) => {
      this.shoes = data;
    });
  }
}
