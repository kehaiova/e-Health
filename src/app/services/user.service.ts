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
          this.router.navigate(["/menu"]);
        },
        error => {
          this.snackbarService.openSnackbarUsernameAndPassword()
        })
  }

  _register(userDetails: UserBindingModel) {
    this.http.post<UserBindingModel>(environment.baseUrl + "/user/register", userDetails)
      .subscribe((result) => {
          this.snackbarService.openSnackbarForSuccessfulRegister();
          this.router.navigate(["/login"])
        },
        error => {
          if (error.status == 400) {
            this.snackbarService.openSnackbarForExistingEmail();
          } else if (error.status == 404) {
            this.snackbarService.openSnackbarForExistingUsername();
          } else if (error.status == 502) {
            this.snackbarService.openSnackbarForExistingUin();
          }
        });
  }

  _update(id: string) {
    this.http.put<any>(environment.baseUrl + "/user/update/" + id, this.user).subscribe(result => {
        this.snackbarService.openSnackbarForSuccessfulSave();
      },
      error => {
        if (error.status == 400) {
          this.snackbarService.openSnackbarForExistingEmail();
        } else if (error.status == 404) {
          this.snackbarService.openSnackbarForExistingUsername();
        } else if (error.status == 502) {
          this.snackbarService.openSnackbarError('Паролите не съвпадат', 'error')
        }
      })
  }

  _updatePassword(id: string, password: string) {
    this.http.put<any>(environment.baseUrl + "/user/updateUserPassword/" + id, password).subscribe(result => {
        this.snackbarService.openSnackbarForSuccessfulSave();
      },
      error => {
        this.snackbarService.openSnackbarError('Паролите не съвпадат!', 'error')
      })
  }
}
