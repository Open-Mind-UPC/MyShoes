import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CollectionService} from "../../services/collection.service";

@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.css']
})
export class UpdateCollectionComponent implements OnInit{
  value = 'Clear me';
  name: string = '';
  updatedAt: any = null;
  id: number = 0;
  constructor(private collectionService: CollectionService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const idParam = this.route.snapshot.queryParamMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      console.log(this.id);

      this.collectionService.getCollectionById(this.id).subscribe((data: any)=> {
        console.log(data);
        this.name = data.name;
        this.updatedAt = data.updatedAt;
        this.value = data.name;
      });

    } else {
      this.router.navigate(['/collection']);
    }
  }
  update(){
    const newCollection = { name: this.value }
    this.collectionService.updateCollection(this.id, newCollection).subscribe((data: any)=>{
      console.log(data);
      this.router.navigate(['/collection']);
    });
  }
}
