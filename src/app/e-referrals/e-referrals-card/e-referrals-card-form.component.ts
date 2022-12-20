import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {PersonsService} from "../../services/persons.service";
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-e-referrals-card-form',
  templateUrl: './e-referrals-card-form.component.html',
  styleUrls: ['./e-referrals-card-form.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]

})
export class EReferralsCardFormComponent implements OnInit {

  @Output() personBindingModelReferrals = new EventEmitter<string>();

  constructor(public personsService: PersonsService, private formBuilder: FormBuilder, private ctrlContainer: FormGroupDirective) {
  }

  model: PersonsBindingModel = {
    id: '',
    idType: '',
    personIdentificator: '',
    personNames: '',
    address: '',
    rhifNo: '',
  }

  ngOnInit(): void {
    this._createValidationForm();
  }

  referralsCardFormGroup!: FormGroup;

  subReferralsCardFormGroup!: FormGroup;

  _createValidationForm() {
    this.subReferralsCardFormGroup = this.formBuilder.group({
      id_type: ['', [Validators.required]],
      personIdentificator: ['', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]+")]],
    })

    this.referralsCardFormGroup = this.ctrlContainer.form;
    this.referralsCardFormGroup.addControl('input-fields', this.subReferralsCardFormGroup)
  }

  submitReferralsForm(model: PersonsBindingModel) {
    this.personBindingModelReferrals.emit(model.personIdentificator);
  }

}
