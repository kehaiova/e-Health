import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map, Observable} from "rxjs";
import { environment } from "src/environments/environment";
import { PersonsBindingModel } from "../models/persons-binding-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  recipesPersonDetails: PersonsBindingModel = {} as PersonsBindingModel;

  personId: string = '';

  validationGroup!: FormGroup;

  _createValidationForm() {
    this.validationGroup = new FormGroup<any>({
      id_type: new FormControl('',[Validators.required]),
      personIdentificator: new FormControl('',[Validators.required]),
    })
  }


  _findByPersonIdentificator(personIdentificator: string): Observable<PersonsBindingModel> {
    return this.http.get<PersonsBindingModel>(environment.baseUrl + "/persons/findByPersonIdentificator/" + personIdentificator)
      .pipe(map(result => {
        this.personId = result.id;
        return result;
      }))
  }

}
