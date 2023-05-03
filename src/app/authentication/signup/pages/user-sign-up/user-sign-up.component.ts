import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserSignUpService} from "../../services/user-sign-up.service";
import {user} from "../../../../shared/model/user";
import {generate} from "rxjs";

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})


export class UserSignUpComponent implements OnInit {
  email: string = "";
  password: string = "";
  name: string = "";
  newUser!: user;
  _id=5;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);

  constructor(private userSignUpService: UserSignUpService) {
  }

  ngOnInit() {
  }


  generateId(){
    this._id++;
    return this._id;
  }
  register(){
    if(this.emailFormControl.valid && this.passwordFormControl.valid && this.nameFormControl.valid){
      const id = this.generateId();
      this.newUser = { id: id, name: this.name, email: this.email, password: this.password };
      this.userSignUpService.registerUser(this.newUser).subscribe((response: any)=>(console.log("User registered: ", response)));
    }
    else{
      console.log("Data Not Valid");
    }
  }
}
