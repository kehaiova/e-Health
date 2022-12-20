import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-e-recipes-card-form',
  templateUrl: './e-recipes-card-form.component.html',
  styleUrls: ['./e-recipes-card-form.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})

export class ERecipesCardFormComponent implements OnInit {
  @Output() personBindingModelRecipes = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
  }

  model: PersonsBindingModel = {
    id: '',
    idType: '',
    personIdentificator: '',
    personNames: '',
    address: '',
    rhifNo: '',
  }

  validationFormGroup!: FormGroup;

  subValidationFormGroup!: FormGroup;

  ngOnInit(): void {
    this._createValidationForm();
  }

  _createValidationForm() {
    this.subValidationFormGroup = this.formBuilder.group({
      id_type: ['', [Validators.required]],
      personIdentificator: ['', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]+")]],
    })

    this.validationFormGroup = this.ctrlContainer.form;
    this.validationFormGroup.addControl('input-fields', this.subValidationFormGroup)
  }


  submitRecipesForm(model: PersonsBindingModel) {
    this.personBindingModelRecipes.emit(model.personIdentificator);
  }


}
