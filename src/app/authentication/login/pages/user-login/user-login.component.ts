import {Component, OnInit} from '@angular/core';
import {UserLoginService} from "../../services/user-login.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  email: string = "";
  password: string = "";
  isLoginValid: boolean= false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private userLoginService: UserLoginService) {
  }

  login(){
    if(this.emailFormControl.valid && this.passwordFormControl.valid)
    this.isLoginValid = this.userLoginService.login(this.email, this.password);
    else{
      if(!this.emailFormControl.valid) console.log("Empty or Incorrect Email");
      if(!this.passwordFormControl.valid) console.log("Empty or Incorrect Password");
    }
  }

  ngOnInit() {
  }


}
