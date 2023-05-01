import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }
  login(email: string, password: string){
    console.log("It's here: UserLoginService!")
    return true;
  }
}
