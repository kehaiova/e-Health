import { Component, OnInit } from '@angular/core';
import {NgEventBus} from "ng-event-bus";
import {PersonsService} from "../../services/persons.service";
import {UserService} from "../../services/user.service";
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {UserBindingModel} from "../../models/user-binding-model";

@Component({
  selector: 'app-e-referrals-save-card-info',
  templateUrl: './e-referrals-save-card-info.component.html',
  styleUrls: ['./e-referrals-save-card-info.component.css']
})
export class EReferralsSaveCardInfoComponent implements OnInit {

  constructor(private eventBus: NgEventBus, private personService: PersonsService, private userService: UserService) { }

  referralsPersonDetails: PersonsBindingModel = {} as PersonsBindingModel;

  doctorInformation: UserBindingModel = {} as UserBindingModel;

  ngOnInit(): void {
    this.eventBus.on('sendPersonDataReferrals').subscribe((meta)=> {
      this.referralsPersonDetails = meta.data;
    })
    this.doctorInformation = this.userService.user;

  }

}
