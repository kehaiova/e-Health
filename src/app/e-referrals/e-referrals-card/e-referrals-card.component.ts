import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {PersonsBindingModel} from "../../models/persons-binding-model";
import {PersonsService} from "../../services/persons.service";
import {SavingService} from "../../services/saving.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-e-referrals-card',
  templateUrl: './e-referrals-card.component.html',
  styleUrls: ['./e-referrals-card.component.css']
})
export class EReferralsCardComponent implements OnInit {

  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private savingService: SavingService, private personsService: PersonsService, private formBuilder: FormBuilder) { }
  referralsPersonDetails: Observable<PersonsBindingModel> = new Observable<PersonsBindingModel>();
  firstFormGroup!: FormGroup;

  parentFormGroup!: FormGroup;

  isSubmitted: boolean = false;

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({});
    this.parentFormGroup = this.formBuilder.group({
      secondFormGroup: this.formBuilder.group({}),
      thirdFormGroup: this.formBuilder.group({}),
    })
  }

  submitReferralsFormParent(model: string) {
    this.referralsPersonDetails = this.personsService._findByPersonIdentificator(model);
    this.isSubmitted = true;
    this.stepper.next();
  }

  saveReferralData() {
    this.savingService.saveReferral();
    this.stepper.reset();
  }

}
