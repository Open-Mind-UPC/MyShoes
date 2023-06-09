import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  name='';
  email='';
  password='';


  constructor( private route:Router) {
    // @ts-ignore

  }
}
