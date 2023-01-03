import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceDatesBindingModel} from "../../models/reference-dates-binding-model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-references-card-referrals-form',
  templateUrl: './references-card-referrals-form.component.html',
  styleUrls: ['./references-card-referrals-form.component.css']
})
export class ReferencesCardReferralsFormComponent implements OnInit {

  @Output() referenceDatesReferral = new EventEmitter<ReferenceDatesBindingModel>();

  constructor() {
  }

  model: ReferenceDatesBindingModel = {
    startDate: '',
    endDate: ''
  }

  startDate!: Date;
  endDate!: Date;

  referralsFormGroup!: FormGroup;

  ngOnInit(): void {
    this.createReferralsValidationForm();
  }

  createReferralsValidationForm() {
    this.referralsFormGroup = new FormGroup<any>({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })
  }

  submitReferralsForm(model: ReferenceDatesBindingModel) {
    if (this.startDate !== undefined && this.endDate !== undefined) {
      const formattedStartDate = formatDate(this.startDate, 'yyyy-MM-dd', 'en-US');
      model.startDate = new Date(formattedStartDate).toISOString();
      const formattedEndDate = formatDate(this.endDate, 'yyyy-MM-dd', 'en-US');
      model.endDate = new Date(formattedEndDate).toISOString();
      this.referenceDatesReferral.emit(model)
    }
  }

}
