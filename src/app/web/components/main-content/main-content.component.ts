import {Component, Input, OnInit} from '@angular/core';
import {ShoesService} from "../../../shared/services/shoes/shoes.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  @Input() trends: Array<any> = [];
  constructor(private shoesService: ShoesService) {
  }

  ngOnInit(){
    this.shoesService.getTrendShoes().subscribe((response: any)=> {
      this.trends = response;
      console.log(this.trends);
    });
  }

}
