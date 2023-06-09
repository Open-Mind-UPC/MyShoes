import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name = new FormControl('Renzo');
  email =new FormControl('renzo@gmail.com');
  password=new FormControl('hola');
}
