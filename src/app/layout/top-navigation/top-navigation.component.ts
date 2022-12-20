import { Component, OnInit } from '@angular/core';
import {UserBindingModel} from "../../models/user-binding-model";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: UserBindingModel = {} as UserBindingModel;

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
