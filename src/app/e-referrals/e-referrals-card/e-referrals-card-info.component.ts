import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {UserBindingModel} from "../../models/user-binding-model";
import {UserService} from "../../services/user.service";
import {NgEventBus} from "ng-event-bus";

@Component({
  selector: 'app-e-referrals-card-info',
  templateUrl: './e-referrals-card-info.component.html',
  styleUrls: ['./e-referrals-card-info.component.css']
})
export class EReferralsCardInfoComponent implements OnInit, OnChanges {

  @Input() referralsDetails: null | PersonsBindingModel = {} as PersonsBindingModel;

  constructor(private eventBus: NgEventBus, private userService: UserService) {
  }

  referralsPersonDetails: PersonsBindingModel = {} as PersonsBindingModel;

  doctorInformation: UserBindingModel = {} as UserBindingModel;

  ngOnInit(): void {
    this.doctorInformation = this.userService.user;
  }

  ngOnChanges() {
    this.referralsPersonDetails = this.referralsDetails ?? {} as PersonsBindingModel;
    this.eventBus.cast('sendPersonDataReferrals', this.referralsPersonDetails)
  }

}
