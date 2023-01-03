import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ReferralsBindingModel} from "../../models/referrals-binding-model";
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-referrals-card-diagnosis',
  templateUrl: './e-referrals-card-diagnosis.component.html',
  styleUrls: ['./e-referrals-card-diagnosis.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]

})
export class EReferralsCardDiagnosisComponent implements OnInit {

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

  primaryDiagnosisFormGroup!: FormGroup;

  subPrimaryDiagnosisFromGroup!: FormGroup;

  ngOnInit(): void {
    this.createPrimaryDiagnosisForm();
  }

  createPrimaryDiagnosisForm() {
    this.subPrimaryDiagnosisFromGroup = this.formBuilder.group({
      mcbCode: ['', [Validators.required, Validators.pattern("[A-Z]{1}[0-9]{2}.[0-9]{1,2}")]],
      primaryDiagnosis: ['', [Validators.required]]
    })
    this.primaryDiagnosisFormGroup = this.ctrlContainer.form;
    this.primaryDiagnosisFormGroup.addControl('input-fields', this.subPrimaryDiagnosisFromGroup)
  }

}
