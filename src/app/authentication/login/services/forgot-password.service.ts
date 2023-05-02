import { Injectable } from '@angular/core';
import {EmailService} from "../../../shared/services/email.service";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor(private emailService: EmailService) { }
  sendResetPasswordEmail(email: string){
    const subject = 'Password Reset Request';
    const message =
      `Dear User,
        <br> We have received a request to reset your password. If this was you, please click on the link below to reset your password:
        <br>
        <br>
        <a href="#">Reset Password</a>
        <br>
        <br>
        If this was not you, please ignore this email.
        <br>
        <br>Thank you,
        <br>MyApp Team`;

    this.emailService.sendEmail(email,subject,message).subscribe(
      (response)=>{
      console.log("Email Sent");
    },
      (error)=>{
       console.log("Email Not Sent");
      });
  }
}
