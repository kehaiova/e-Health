import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserBindingModel} from "../../models/user-binding-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-card-user-details',
  templateUrl: './account-card-user-details.component.html',
  styleUrls: ['./account-card-user-details.component.css']
})
export class AccountCardUserDetailsComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  editFormGroup!: FormGroup;

  user: UserBindingModel = {} as UserBindingModel;

  editMode: boolean = false;

  isSaved: boolean = false;



  ngOnInit(): void {
    this.user = this.userService.user;
    this.createLoginFormGroup();
  }

  createLoginFormGroup() {
    this.editFormGroup = new FormGroup<any>({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  edit() {
    this.editMode = true;
  }


  saveInfo(id: string) {
    this.userService._update(id);
    this.editMode = false;
  }
}
