import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserSignUpService} from "../../services/user-sign-up.service";
import {UserResource} from "../../../../shared/model/CreateUser";


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})


export class UserSignUpComponent implements OnInit {
  email: string = "";
  password: string = "";
  name: string = "";
  address: string = "";
  newUser!: UserResource;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('',[Validators.required]);
  registrationSuccessMessage: string = "";

  constructor(private userSignUpService: UserSignUpService) {
  }

  ngOnInit() {
  }

  register() {
    if (
      this.emailFormControl.valid &&
      this.passwordFormControl.valid &&
      this.nameFormControl.valid &&
      this.addressFormControl.valid
    ) {
      this.newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address
      };
      this.userSignUpService.registerUser(this.newUser).subscribe(
        (response: any) => {
          console.log('Registration response:', response);
          this.registrationSuccessMessage = 'Registration successful!';
        },
        (error: any) => {
          console.error('Registration failed:', error);
          this.registrationSuccessMessage = '';
        }
      );
    } else {
      console.log('Data Not Valid');
    }
  }
}
