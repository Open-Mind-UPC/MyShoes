import {Component, Input, OnInit} from '@angular/core';
import {ShoesService} from "../../../shared/services/shoes/shoes.service";
import {FormControl, Validators} from "@angular/forms";
import {design} from "../../model/design";
import {DesignService} from "../../../shared/services/design/design.service";

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
  _id=0;
  shoe_id: number = 0;
  color: string = "";
  material: string = "";
  newDesign!: design;
  colorFormControl = new FormControl('', [Validators.required]);
  materialFormControl = new FormControl('', [Validators.required]);
  shoe_idFormControl = new FormControl('', [Validators.required]);
  constructor(private shoesService: ShoesService,private designService: DesignService) {
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

  generateId(){
    this._id++;
    return this._id;
  }

  save(){
    if(this.shoe_idFormControl.valid && this.colorFormControl.valid && this.materialFormControl.valid){
      const id = this.generateId();
      this.newDesign = { id: id, shoe_id: this.shoe_id, color: this.color, material: this.material };
      this.designService.saveDesign(this.newDesign).subscribe((response: any)=>(console.log("User registered: ", response)));
    }
    else{
      console.log("Data Not Valid");
    }
  }


}
