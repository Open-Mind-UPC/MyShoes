import {Component, OnInit} from '@angular/core';
import {UserLoginService} from "../../services/user-login.service";
import {UserService} from "../../../../shared/services/user/user.service";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../../shared/model/user";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  email: string = "";
  password: string = "";
  isLoginValid: boolean= false;
  loginErrorMessage: string = "";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private userLoginService: UserLoginService,private userService: UserService, private router: Router) {
  }
  login() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.userLoginService.login(this.email, this.password).subscribe(
        (matchedUser: User | undefined) => {
          if (matchedUser) {
            this.userService.setCurrentUser(matchedUser)
            // Handle successful login
            this.isLoginValid = true;
            console.log('Login successful:', matchedUser);
            this.router.navigate(['/home']);
          } else {
            // Handle login error
            this.isLoginValid = false;
            this.loginErrorMessage = "Invalid email or password";
            console.log('Login failed: Invalid email or password');
          }
        },
        (error) => {
          // Handle login error
          this.isLoginValid = false;
          this.loginErrorMessage = "An error occurred during login";
          console.log('Login failed:', error);
        }
      );
    } else {
      if (!this.emailFormControl.valid) {
        this.loginErrorMessage = "Empty or incorrect email";
        console.log('Empty or incorrect email');
      }
      if (!this.passwordFormControl.valid) {
        this.loginErrorMessage = "Empty or incorrect password";
        console.log('Empty or incorrect password');
      }
    }
  }
  ngOnInit() {
  }


}
