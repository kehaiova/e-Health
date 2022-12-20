import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipesBindingModel} from "../models/recipes-binding-model";
import {RecipeDrugsBindingModel} from "../models/recipe-drugs-binding-model";
import {UserService} from "./user.service";
import {PersonsService} from "./persons.service";
import {environment} from "../../environments/environment";
import {formatDate} from "@angular/common";
import {ReferralsBindingModel} from "../models/referrals-binding-model";
import {SnackbarService} from "./snackbar.service";

@Injectable({
  providedIn: "root"
})

export class SavingService {

  constructor(private snackbarService: SnackbarService, private userService: UserService, private personsService: PersonsService, private http: HttpClient) {
  }

  recipe: RecipesBindingModel = {} as RecipesBindingModel;

  referral: ReferralsBindingModel = {} as ReferralsBindingModel;

  medications: RecipeDrugsBindingModel [] = [];

  prescriptionBookletNo: string = '';
  protocolNo: string = '';
  outpationListNo: string = '';
  drugProductName: string = '';
  mcbCode: string = '';

  saveRecipe() {
    const formattedDate = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
    this.recipe = {
      personId: this.personsService.personId,
      prescriptionBookletNo: this.prescriptionBookletNo,
      protocolNo: this.protocolNo,
      outpationListNo: this.outpationListNo,
      doctorNames: this.userService.user.doctorName,
      uinDoctor: this.userService.user.uinDoctor,
      issueDate: formattedDate,
      recipeDrugsList: this.medications
    }
    this.http.post(environment.baseUrl + "/recipes/saveAndFlush", this.recipe).subscribe(result => {
      this.snackbarService.openSnackbarForSuccessfulSave();
    });
  }

  saveReferral() {
    const formattedDate = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
    this.referral.issueDate = formattedDate;
    this.referral.personId = this.personsService.personId;
    this.referral.uinDoctor = this.userService.user.uinDoctor;
    this.http.post(environment.baseUrl + "/referrals/saveAndFlush", this.referral).subscribe(result => {
      this.snackbarService.openSnackbarForSuccessfulSave();
    })
  }


}
