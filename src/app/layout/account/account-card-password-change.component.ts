import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {UserBindingModel} from "../../models/user-binding-model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-account-card-password-change',
  templateUrl: './account-card-password-change.component.html',
  styleUrls: ['./account-card-password-change.component.css']
})
export class AccountCardPasswordChangeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  editMode: boolean = false;

  passwordFormGroup!: FormGroup;

  user: UserBindingModel = {} as UserBindingModel;
  isSaved: boolean = false;

  newPassword: string = '';

  confirmPassword: string = '';

  ngOnInit(): void {
    this.user = this.userService.user;
    this.createLoginFormGroup();
  }

  createLoginFormGroup() {
    this.passwordFormGroup = new FormGroup({
      newPassword: new FormControl('', [Validators.required, this.matchValidator('confirmPassword', true)]),
      confirmPassword: new FormControl('', [Validators.required, this.matchValidator('password')]),
    })
  }

  matchValidator(
    matchTo: string,
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl):
      ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
      !!control.parent.value &&
      control.value ===
      (control.parent?.controls as any)[matchTo]?.value
        ? null
        : {matching: true};
    };
  }

  edit() {
    this.editMode = true;
  }

  saveInfo(id: string, newPassword: string) {
    this.userService._updatePassword(id, newPassword);
    this.editMode = false;
  }
}
