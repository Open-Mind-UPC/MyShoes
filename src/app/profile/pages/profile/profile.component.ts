import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../../../shared/services/user/user.service";
import {User} from "../../../shared/model/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  address = new FormControl('');

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const currentUser: User | undefined = this.userService.getCurrentUser();
    if (currentUser) {
      this.name.setValue(currentUser.name || '');
      this.email.setValue(currentUser.email || '');
      this.password.setValue(currentUser.password || '');
      this.address.setValue(currentUser.address || '');
    }
  }
}
