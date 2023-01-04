import {Component, OnInit} from '@angular/core';
import {ReasonsService} from "../../services/reasons.service";
import {ReasonsBindingModel} from "../../models/reasons-binding-model";
import {Observable} from "rxjs";
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-referrals-card-sent-for',
  templateUrl: './e-referrals-card-sent-for.component.html',
  styleUrls: ['./e-referrals-card-sent-for.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]

})
export class EReferralsCardSentForComponent implements OnInit {

  constructor(private reasonsService: ReasonsService, public savingService: SavingService, private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
  }

  reasons!: Observable<ReasonsBindingModel[]>

  reasonsFormGroup!: FormGroup;

  subReasonsFormGroup!: FormGroup;


  ngOnInit() {
    this.reasons = this.reasonsService._getReasons();
    this.createValidationForm();
  }

  createValidationForm() {
    this.subReasonsFormGroup = this.formBuilder.group({
      reason: ['', [Validators.required]],
    })
    this.reasonsFormGroup = this.ctrlContainer.form;
    this.reasonsFormGroup.addControl('input-fields', this.subReasonsFormGroup)
  }
}
