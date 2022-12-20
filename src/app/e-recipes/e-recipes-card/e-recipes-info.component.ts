import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {UserBindingModel} from "../../models/user-binding-model";
import {UserService} from "../../services/user.service";
import {PersonsService} from "../../services/persons.service";

@Component({
  selector: 'app-e-recipes-info',
  templateUrl: './e-recipes-info.component.html',
  styleUrls: ['./e-recipes-info.component.css']
})
export class ERecipesInfoComponent implements OnInit, OnChanges{

  @Input() recipesDetails: null | PersonsBindingModel = {} as PersonsBindingModel ;

  constructor(private personService: PersonsService, private userService: UserService) { }
  recipesPersonDetails: PersonsBindingModel = {} as PersonsBindingModel;

  doctorInformation: UserBindingModel = {} as UserBindingModel;

  ngOnInit(): void {
    this.doctorInformation = this.userService.user;
  }

  ngOnChanges() {
    this.recipesPersonDetails = this.recipesDetails ?? {} as PersonsBindingModel;
    this.personService.recipesPersonDetails = this.recipesPersonDetails;
  }

}
