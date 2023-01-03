import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";
import {environment} from "../../environments/environment";
import {VReferencesRecipesBindingModel} from "../models/v-references-recipes-binding-model";
import {VReferencesReferralsBindingModel} from "../models/v-references-referrals-binding-model";

@Injectable({
  providedIn: "root"
})

export class ReferencesService {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  _getReferenceDetailsRecipes(startDate: string, endDate: string): Observable<VReferencesRecipesBindingModel[]> {
    let uinDoctor = this.userService.user.uinDoctor;
    return this.http.get<VReferencesRecipesBindingModel[]>(environment.baseUrl + "/references/recipes/getByUinDoctor/" + startDate + "/" + endDate + "/" + uinDoctor);

  }

  _getReferenceDetailsReferrals(startDate: string, endDate: string): Observable<VReferencesReferralsBindingModel[]> {
    let uinDoctor = this.userService.user.uinDoctor;
    return this.http.get<VReferencesReferralsBindingModel[]>(environment.baseUrl + "/references/referrals/getByUinDoctor/" + startDate + "/" + endDate + "/" + uinDoctor);

  }

}
