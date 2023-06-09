import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name = new FormControl('name');
  email =new FormControl('xxxxx@gmail.com');
  password=new FormControl('hola785');
  country=new FormControl('country');
  newpassword=new FormControl('');
  confirmnewpassword=new FormControl('');
  phonenumber = new FormControl('000000000');

}
