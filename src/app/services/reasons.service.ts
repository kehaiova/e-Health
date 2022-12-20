import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ReasonsBindingModel} from "../models/reasons-binding-model";

@Injectable({
  providedIn: 'root'
})

export class ReasonsService {
  constructor(private http: HttpClient) {
  }

  _getReasons(): Observable<ReasonsBindingModel[]>{
    return this.http.get<ReasonsBindingModel[]>(environment.baseUrl + "/reasons/findAll");
  }
}
