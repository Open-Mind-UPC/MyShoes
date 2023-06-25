import { Injectable } from '@angular/core';
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | undefined;

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User | undefined {
    return this.currentUser;
  }
}
