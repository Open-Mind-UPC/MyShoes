import { Component } from '@angular/core';
import {CollectionService} from "../../services/collection.service";
import {Collection} from "../../model/collection";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent {
  value = 'Clear me';
  title: string = "";
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
  create(){
    const newCollection: Collection = { name: this.title, user: 1 };
    this.collectionService.createCollection(newCollection).subscribe((response: any)=> {
      console.log("Collection created: ", response);
      this.router.navigate(['/collection']);
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
