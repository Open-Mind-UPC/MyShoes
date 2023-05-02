import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ForgotPasswordService} from "../../services/forgot-password.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit{
  email: string = "";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private forgotPasswordService: ForgotPasswordService) {}

  ngOnInit(): void {}

  sendResetPasswordEmail(){
    this.forgotPasswordService.sendResetPasswordEmail(this.email);
  }
}
