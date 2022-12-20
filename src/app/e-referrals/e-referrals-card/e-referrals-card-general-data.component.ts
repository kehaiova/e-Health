import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ReferralsBindingModel} from "../../models/referrals-binding-model";
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-referrals-card-general-data',
  templateUrl: './e-referrals-card-general-data.component.html',
  styleUrls: ['./e-referrals-card-general-data.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]

})
export class EReferralsCardGeneralDataComponent implements OnInit {

  constructor(public savingService: SavingService, private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
  }

  model: ReferralsBindingModel = {
    id: '',
    personId: '',
    outpationListNo: '',
    medicalReferralNo: '',
    mcbCodePrimary: '',
    diagnosisPrimaryName: '',
    doctorNames: '',
    uinDoctor: '',
    sentFor: '',
    issueDate: ''
  }

  generalDataFormGroup!: FormGroup;

  subGeneralDataFormGroup!: FormGroup;

  ngOnInit(): void {
    this.createGeneralDataForm();
  }

  createGeneralDataForm() {
    this.subGeneralDataFormGroup = this.formBuilder.group({
      medicalReferralNo: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      outpatientListNo: ['', [Validators.required, Validators.pattern("[0-9]+")]]
    })
    this.generalDataFormGroup = this.ctrlContainer.form;
    this.generalDataFormGroup.addControl('input-fields', this.subGeneralDataFormGroup)
  }

}
