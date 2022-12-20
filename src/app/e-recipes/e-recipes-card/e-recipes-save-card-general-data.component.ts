import { Component, OnInit } from '@angular/core';
import {SavingService} from "../../services/saving.service";

@Component({
  selector: 'app-e-recipes-save-card-general-data',
  templateUrl: './e-recipes-save-card-general-data.component.html',
  styleUrls: ['./e-recipes-save-card-general-data.component.css']
})
export class ERecipesSaveCardGeneralDataComponent implements OnInit {

  constructor(public savingService: SavingService) { }

  ngOnInit(): void {
  }

}
