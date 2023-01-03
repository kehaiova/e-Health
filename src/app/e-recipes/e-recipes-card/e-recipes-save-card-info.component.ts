import { Component, OnInit } from '@angular/core';
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {UserBindingModel} from "../../models/user-binding-model";
import {PersonsService} from "../../services/persons.service";
import {UserService} from "../../services/user.service";
import {NgEventBus} from "ng-event-bus";

@Component({
  selector: 'app-e-recipes-save-card-info',
  templateUrl: './e-recipes-save-card-info.component.html',
  styleUrls: ['./e-recipes-save-card-info.component.css']
})
export class ERecipesSaveCardInfoComponent implements OnInit {

  constructor(private eventBus: NgEventBus, private personService: PersonsService, private userService: UserService) { }

  recipesPersonDetails: PersonsBindingModel = {} as PersonsBindingModel;

  doctorInformation: UserBindingModel = {} as UserBindingModel;

  ngOnInit(): void {
    this.eventBus.on('sendPersonData').subscribe((meta)=> {
      this.recipesPersonDetails = meta.data;
    })
    this.doctorInformation = this.userService.user;

  }

}
