import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiKey ="c7b5c53d5cbbbc6641d9cce52cae3f37";
  constructor(private httpClient: HttpClient) { }

  sendEmail(to: string, subject: string, message: string){
    const email = {
      recipients: [{ email: to }],
      subject: subject,
      text: message
    };

    console.log("LLegué hasta EmailService");

    return this.httpClient.post('https://api.mailtrap.io/v1/send/email', email, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

  }

}
