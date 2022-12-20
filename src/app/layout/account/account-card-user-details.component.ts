import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserBindingModel} from "../../models/user-binding-model";

@Component({
  selector: 'app-account-card-user-details',
  templateUrl: './account-card-user-details.component.html',
  styleUrls: ['./account-card-user-details.component.css']
})
export class AccountCardUserDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: UserBindingModel = {} as UserBindingModel;

  editMode: boolean = false;

  isSaved: boolean = false;

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  edit() {
    this.editMode = true;
  }

  saveInfo(id: string) {
    this.userService._update(id);
    this.isSaved = true;
    this.editMode = false;
  }

}
