import { Injectable } from '@angular/core';
import { User } from "../../model/user";

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

  updateUser(updatedUser: User) {
    if (this.currentUser) {
      this.currentUser.name = updatedUser.name;
      this.currentUser.email = updatedUser.email;
      this.currentUser.password = updatedUser.password;
      this.currentUser.country = updatedUser.country;
      this.currentUser.phone = updatedUser.phone;
    }
  }
}
