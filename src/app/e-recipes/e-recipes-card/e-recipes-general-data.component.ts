import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {RecipesBindingModel} from "../../models/recipes-binding-model";
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-recipes-general-data',
  templateUrl: './e-recipes-general-data.component.html',
  styleUrls: ['./e-recipes-general-data.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class ERecipesGeneralDataComponent implements OnInit {

  constructor(public savingService: SavingService, private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
  }

  generalDataFormGroup!: FormGroup;

  subGeneralDataFormGroup!: FormGroup;
  model: RecipesBindingModel = {
    personId: '',
    prescriptionBookletNo: '',
    protocolNo: '',
    outpationListNo: '',
    doctorNames: '',
    uinDoctor: '',
    issueDate: '',
    recipeDrugsList: []
  }

  ngOnInit(): void {
    this.createGeneralDataForm();
  }

  createGeneralDataForm() {
    this.subGeneralDataFormGroup = this.formBuilder.group({
      prescriptionBookletNo: ['', [Validators.pattern("[0-9]+")]],
      protocolNo: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      outpatientListNo: ['', [Validators.required, Validators.pattern("[0-9]+")]]
    })
    this.generalDataFormGroup = this.ctrlContainer.form;
    this.generalDataFormGroup.addControl('general-data', this.subGeneralDataFormGroup)
  }

}
