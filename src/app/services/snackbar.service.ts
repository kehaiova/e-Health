import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackbar() {
    this._snackBar.open('Нeвалидно потребителско име/парола', '', {
      duration: 2000,
      panelClass: ['snackbar-error'],
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  openSnackbarForSuccessfulRegister() {
    this._snackBar.open('Успешна регистрация!', '', {
      duration: 2000,
      panelClass: ['snackbar-success'],
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  openSnackbarForExistingUsername() {
    this._snackBar.open('Потребителското име е заето!', '', {
      duration: 2000,
      panelClass: ['snackbar-error'],
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  openSnackbarForExistingEmail() {
    this._snackBar.open('Имейлът е зает!', '', {
      duration: 2000,
      panelClass: ['snackbar-error'],
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  openSnackbarForSuccessfulSave() {
    this._snackBar.open('Успешно запазване!', '', {
      duration: 2000,
      panelClass: ['snackbar-success'],
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  openSnackbarForAddedDrug() {
    this._snackBar.open('Успешно добавяне на лекарствен продукт!', '', {
      duration: 2000,
      panelClass: ['snackbar-success'],
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }
}
