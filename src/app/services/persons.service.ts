import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {PersonsBindingModel} from "../models/persons-binding-model";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  personDetails: PersonsBindingModel = {} as PersonsBindingModel;

  personId: string = '';

  _findByPersonIdentificator(personIdentificator: string): Observable<PersonsBindingModel> {
    return this.http.get<PersonsBindingModel>(environment.baseUrl + "/persons/findByPersonIdentificator/" + personIdentificator)
      .pipe(map(result => {
        this.personId = result.id;
        return result;
      }))
  }

}
