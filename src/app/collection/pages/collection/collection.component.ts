import {Component, Input, OnInit} from '@angular/core';
import {CollectionService} from "../../services/collection.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit{
  @Input() collections: Array<any>= [];

  constructor(private collectionService: CollectionService) {
  }
  ngOnInit(): void {
    this.collectionService.getUsersCollections().subscribe((data: any[])=> {
      this.collections = data;
      console.log(data);
    });

  }

}
