import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserBindingModel} from "../../models/user-binding-model";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  loginFormGroup!: FormGroup;
  model: UserBindingModel = {
    id: '',
    username: '',
    password: '',
    email: '',
    doctorName: '',
    uinDoctor: '',
    registryNumberLz: '',
  }

  ngOnInit(): void {
    this.createLoginFormGroup();
  }

  createLoginFormGroup() {
    this.loginFormGroup = new FormGroup<any>({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(username: string, password: string) {
    this.userService._login(username, password);
    if (this.userService.isLoggedIn === false) {
      this.loginFormGroup.reset();
    }
  }

}
