import {Component, Input, OnInit} from '@angular/core';
import {ShoesService} from "../../../shared/services/shoes/shoes.service";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit{
  title = 'shoes';
  @Input() shoes: Array<any>= [];
  selectedShoe: any;
  showColorField: boolean = false;
  selectedColor: string = '';
  selectedMaterial: string = '';

  constructor(private shoesService: ShoesService) {
  }
  ngOnInit(): void {
    this.shoesService.initShoes().subscribe((data: any) => {
      this.shoes = data;

    });

  }
  onShoeSelection(shoe: any): void {
    this.selectedShoe = shoe;
    this.showColorField = true;
  }
}
