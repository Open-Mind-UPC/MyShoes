import {Component, Input, OnInit} from '@angular/core';
import {CollectionService} from "../../services/collection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit{
  collections: Array<any>= [];
  UserId = 1;

  constructor(private collectionService: CollectionService, private router: Router) {
  }
  ngOnInit(): void {
    this.collectionService.getUsersCollections(this.UserId).subscribe((data: any)=> {
      console.log(data);
      this.collections = data;
      console.log(this.collections);
    });

  }
  delete(id: number){
    this.collectionService.deleteCollection(id).subscribe((response:any) => {
      console.log("Collection created: ", response);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        window.location.reload();
      });
    });
  }

}
