import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserSignUpService} from "../../services/user-sign-up.service";
import {User} from "../../../../shared/model/user";

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})


export class UserSignUpComponent implements OnInit {
  email: string = "";
  password: string = "";
  name: string = "";
  country: string = "";
  phone: string = "";
  newUser!: User;
  _id=5;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  registrationSuccessMessage: string = "";

  constructor(private userSignUpService: UserSignUpService) {
  }

  ngOnInit() {
  }


  generateId(){
    this._id++;
    return this._id;
  }

  register() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid && this.nameFormControl.valid) {
      const id = this.generateId();
      this.newUser = {id: id, name: this.name, email: this.email, password: this.password, country: this.country, phone: this.phone};
      this.userSignUpService.checkExistingEmail(this.email).subscribe(
        (isExisting: boolean) => {
          if (isExisting) {
            this.registrationSuccessMessage = "Email already exists";
          } else {
            this.userSignUpService.registerUser(this.newUser).subscribe(
              (response: any) => {
                console.log("User registered: ", response);
                this.registrationSuccessMessage = "Registration successful!";
              },
              (error: any) => {
                console.error("Registration failed: ", error);
                this.registrationSuccessMessage = "Registration failed. Please try again.";
              }
            );
          }
        },
        (error) => {
          console.error('Error checking existing email:', error);
        }
      );
    } else {
      console.log("Data Not Valid");
    }
  }
}
