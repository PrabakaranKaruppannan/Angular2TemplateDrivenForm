import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  userAdded = false;
  AddedUser: User = new User('Praba', 'Karan', 'Male');
  SexOptions = ['Male', 'Female'];

  constructor() { }

  ngOnInit() {
  }

  newUser() {
    this.AddedUser = new User('', '', '');
  }

  addUser() {
    this.userAdded = true;
  }
}
