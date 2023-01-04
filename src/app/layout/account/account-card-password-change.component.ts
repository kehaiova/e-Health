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
import {MyErrorStateMatcher} from "../../config/MyErrorStateMatcher";

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

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.user = this.userService.user;
    this.createLoginFormGroup();
  }

  createLoginFormGroup() {
    this.passwordFormGroup = this.formBuilder.group({
        newPassword: ['', [Validators.required]],
        confirmPassword:[''],
      },
      {validator: this.checkPasswords})
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls['newPassword'].value;
    let confirmPass = group.controls['confirmPassword'].value;

    console.log(pass, "pass")
    console.log(confirmPass, 'confirmPass')
    return pass === confirmPass ? null : { notSame: true }
  }

  edit() {
    this.editMode = true;
  }

  saveInfo(id: string, newPassword: string) {
    this.userService._updatePassword(id, newPassword);
    this.editMode = false;
  }
}
