import { Component, OnInit } from '@angular/core';
import { UserBindingModel } from 'src/app/models/user-binding-model';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

  model: UserBindingModel = {
    id: '',
    username: '',
    password: '',
    email: '',
    doctorName: '',
    uinDoctor: '',
    registryNumberLz: '',
  }

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.createRegisterValidationForm();
  }

  createRegisterValidationForm() {
    this.registerForm = new FormGroup<any>({
      username: new FormControl(this.model.username, [Validators.required]),
      password: new FormControl(this.model.password, [Validators.required]),
      email: new FormControl(this.model.email, [Validators.required, Validators.email]),
      doctorName: new FormControl(this.model.doctorName, [Validators.required]),
      uinDoctor: new FormControl(this.model.uinDoctor, [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")], ),
      healthFacilityNo:  new FormControl(this.model.registryNumberLz, [Validators.required, Validators.maxLength(10), Validators.minLength(10),  Validators.pattern("^[0-9]*$")]),
    })
  }

  register(model: UserBindingModel) {
    this.userService._register(model);
  }

}
