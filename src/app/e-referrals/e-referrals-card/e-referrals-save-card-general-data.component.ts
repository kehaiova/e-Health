import { Component, OnInit } from '@angular/core';
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-referrals-save-card-general-data',
  templateUrl: './e-referrals-save-card-general-data.component.html',
  styleUrls: ['./e-referrals-save-card-general-data.component.css']
})
export class EReferralsSaveCardGeneralDataComponent implements OnInit {

  constructor(public savingService: SavingService) { }

  ngOnInit(): void {
  }

}
