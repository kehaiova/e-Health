import { Component, OnInit } from '@angular/core';
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-referrals-save-card-diagnosis',
  templateUrl: './e-referrals-save-card-diagnosis.component.html',
  styleUrls: ['./e-referrals-save-card-diagnosis.component.css']
})
export class EReferralsSaveCardDiagnosisComponent implements OnInit {

  constructor(public savingService: SavingService) { }

  ngOnInit(): void {
  }

}
