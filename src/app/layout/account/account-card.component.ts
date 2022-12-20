import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  constructor(private userService: UserService) { }

  loggedUser: string = '';

  ngOnInit(): void {
    this.loggedUser = this.userService.user.doctorName;
  }

}
