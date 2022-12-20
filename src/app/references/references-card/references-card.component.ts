import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {VReferencesRecipesBindingModel} from "../../models/v-references-recipes-binding-model";
import {ReferencesService} from "../../services/references.service";
import {ReferenceDatesBindingModel} from "../../models/reference-dates-binding-model";
import {VReferencesReferralsBindingModel} from "../../models/v-references-referrals-binding-model";

@Component({
  selector: 'app-references-card',
  templateUrl: './references-card.component.html',
  styleUrls: ['./references-card.component.css']
})
export class ReferencesCardComponent implements OnInit {

  constructor(private referencesService: ReferencesService) { }

  recipeDataSource?: Observable<VReferencesRecipesBindingModel[]> = new Observable<VReferencesRecipesBindingModel[]>();

  referralDataSource?: Observable<VReferencesReferralsBindingModel[]> = new Observable<VReferencesReferralsBindingModel[]>();

  ngOnInit(): void {
  }

  submitRecipeForm(model: ReferenceDatesBindingModel) {
    this.recipeDataSource = this.referencesService._getReferenceDetailsRecipes(model.startDate, model.endDate)
  }

  submitReferralForm(model: ReferenceDatesBindingModel) {
    this.referralDataSource = this.referencesService._getReferenceDetailsReferrals(model.startDate, model.endDate)
  }

}
