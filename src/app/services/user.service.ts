import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {UserBindingModel} from "../models/user-binding-model";
import {Router} from "@angular/router";
import {SnackbarService} from "./snackbar.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private snackbarService: SnackbarService, private http: HttpClient) {
  }

  isLoggedIn: boolean = false;

  user: UserBindingModel = {} as UserBindingModel;

  _login(username: string, password: string) {
    return this.http.get<UserBindingModel>(environment.baseUrl + '/user/login/' + username + "/" + password)
      .subscribe(result => {
          this.user = result;
          this.isLoggedIn = true;
          this.router.navigate(["/menu"]).then(r => {});
        },
        error => {
          this.snackbarService.openSnackbar('Грешно потребителско име/парола!', 'error')
        })
  }

  _register(userDetails: UserBindingModel) {
    this.http.post<UserBindingModel>(environment.baseUrl + "/user/register", userDetails)
      .subscribe((result) => {
          this.snackbarService.openSnackbar('Успешна регистрация!', 'success');
          this.router.navigate(["/login"]).then(r => {})
        },
        error => {
          if (error.status == 400) {
            this.snackbarService.openSnackbar('Имейлът е зает!', 'error');
          } else if (error.status == 404) {
            this.snackbarService.openSnackbar('Потребителското име е заето!', 'error');
          } else if (error.status == 502) {
            this.snackbarService.openSnackbar('Лекар с този УИН вече съществува!', 'error');
          }
        });
  }

  _update(id: string) {
    this.http.put<any>(environment.baseUrl + "/user/update/" + id, this.user).subscribe(result => {
        this.snackbarService.openSnackbar('Успешно актуализиране на информацията', 'success');
      },
      error => {
        if (error.status == 400) {
          this.snackbarService.openSnackbar('Имейл адресът вече съществува!', 'error');
        } else if (error.status == 404) {
          this.snackbarService.openSnackbar('Потребителското име вече съществува', 'error');
        }
      })
  }

  _updatePassword(id: string, password: string) {
    this.http.put<any>(environment.baseUrl + "/user/updateUserPassword/" + id, password).subscribe(result => {
        this.snackbarService.openSnackbar('Успешна смяна на парола', 'success');
      },
      error => {
        this.snackbarService.openSnackbar('Текущата и въведената Ви парола не съвпадат!', 'error')
      })
  }
}
