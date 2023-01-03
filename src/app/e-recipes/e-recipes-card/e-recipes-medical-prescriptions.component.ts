import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {RecipeDrugsBindingModel} from "../../models/recipe-drugs-binding-model";
import {SavingService} from "../../services/saving.service";
import {NgEventBus} from "ng-event-bus";
import {SnackbarService} from "../../services/snackbar.service";

@Component({
  selector: 'app-e-recipes-medical-prescriptions',
  templateUrl: './e-recipes-medical-prescriptions.component.html',
  styleUrls: ['./e-recipes-medical-prescriptions.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class ERecipesMedicalPrescriptionsComponent implements OnInit {

  constructor(private snackBarService: SnackbarService, private eventBus: NgEventBus, public savingService: SavingService, private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
  }

  model: RecipeDrugsBindingModel = {
    drugProductName: '',
    mcbCode: ''
  }

  medications: RecipeDrugsBindingModel [] = [];
  medicalPrescriptionForm!: FormGroup;

  subMedicalPrescriptionForm!: FormGroup;

  ngOnInit(): void {
    this.createMedicalPrescriptionForm();
  }

  createMedicalPrescriptionForm() {
    this.subMedicalPrescriptionForm = this.formBuilder.group({
      drugProductName: ['', [Validators.required, Validators.pattern("[A-Za-z]+")]],
      mcbCode: ['', [Validators.required, Validators.pattern("[A-Z]{1}[0-9]{2}.[0-9]{1,2}")]]
    })
    this.medicalPrescriptionForm = this.ctrlContainer.form;
    this.medicalPrescriptionForm.addControl('input-fields', this.subMedicalPrescriptionForm)
  }

  addDrugToList() {
    const newDrug: RecipeDrugsBindingModel = {
      drugProductName: this.model.drugProductName,
      mcbCode: this.model.mcbCode
    };
    this.medications.push(newDrug);
    this.savingService.medications = this.medications;
    this.snackBarService.openSnackbarForAddedDrug();
  }

  sendData() {
    this.eventBus.cast('sendPrescriptions', this.medications);
  }
}
