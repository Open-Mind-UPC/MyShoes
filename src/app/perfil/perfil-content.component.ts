import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import{FormControl} from '@angular/forms'







@Component({
  selector: 'app-perfil-content',
  templateUrl: './perfil-content.component.html',
  styleUrls: ['./perfil-content.component.css']
})
export class PerfilContentComponent  {
  name = new FormControl('Renzo');
  email =new FormControl('renzo@gmail.com');
  password=new FormControl('hola');


}
