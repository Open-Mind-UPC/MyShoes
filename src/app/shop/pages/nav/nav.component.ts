import { Component } from '@angular/core';
import {ShoesServiceService} from "../../services/shoes-service.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  shoes: Array<any> = [];
  constructor(private shoesService: ShoesServiceService) {
    this.shoesService.initShoes().subscribe((data: any) => {
      this.shoes = data;
    });
  }
}
