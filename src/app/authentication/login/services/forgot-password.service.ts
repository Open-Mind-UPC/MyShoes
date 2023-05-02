import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor() { }
  sendResetPasswordEmail(email: string){
    console.log("Email sent");
  }
}
