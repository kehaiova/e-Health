import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {PersonsService} from "../../services/persons.service";
import {SavingService} from "../../services/saving.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-e-recipes-card',
  templateUrl: './e-recipes-card.component.html',
  styleUrls: ['./e-recipes-card.component.css'],
})
export class ERecipesCardComponent implements OnInit {

  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private formBuilder: FormBuilder, public savingService: SavingService, private personsService: PersonsService) {
  }

  recipesPersonDetails: Observable<PersonsBindingModel> = new Observable<PersonsBindingModel>();

  firstFormGroup!: FormGroup;

  parentFormGroup!: FormGroup;

  isSubmitted: boolean = false;

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({});
    this.parentFormGroup = this.formBuilder.group({
      secondFormGroup: this.formBuilder.group({}),
      thirdFormGroup: this.formBuilder.group({})
    })
  }


  submitRecipesFormParent(model: string) {
    this.recipesPersonDetails = this.personsService._findByPersonIdentificator(model);
    this.isSubmitted = true;
    this.stepper.next();
  }

  saveData() {
    this.savingService.saveRecipe();
    this.stepper.reset();
  }

}
