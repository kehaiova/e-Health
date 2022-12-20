import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferenceDatesBindingModel} from "../../models/reference-dates-binding-model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-references-card-e-recipes-form',
  templateUrl: './references-card-e-recipes-form.component.html',
  styleUrls: ['./references-card-e-recipes-form.component.css']
})
export class ReferencesCardERecipesFormComponent implements OnInit {

  @Output() referenceDatesRecipe = new EventEmitter<ReferenceDatesBindingModel>();

  constructor() {
  }

  model: ReferenceDatesBindingModel = {
    startDate: '',
    endDate: ''
  }

  startDate!: Date;
  endDate!: Date;

  referenceFormGroup!: FormGroup;

  ngOnInit(): void {
    this.createReferenceFormGroup();
    console.log(this.startDate);
    console.log(this.endDate)
  }

  createReferenceFormGroup() {
    this.referenceFormGroup = new FormGroup<any>({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })
  }

  submitDates(model: ReferenceDatesBindingModel) {
    if (this.startDate !== undefined && this.endDate !== undefined) {
      const formattedStartDate = formatDate(this.startDate, 'yyyy-MM-dd', 'en-US');
      model.startDate = new Date(formattedStartDate).toISOString();
      const formattedEndDate = formatDate(this.endDate, 'yyyy-MM-dd', 'en-US');
      model.endDate = new Date(formattedEndDate).toISOString();
      this.referenceDatesRecipe.emit(model)
    }
  }
}

