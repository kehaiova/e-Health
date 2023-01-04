import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatIconModule} from '@angular/material/icon';
import {MenuComponent} from './menu/menu.component';
import {MenuFormComponent} from './menu/menu-form.component';
import {TopNavigationComponent} from './top-navigation/top-navigation.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {RegisterComponent} from './register/register.component';
import {RegisterFormComponent} from './register/register-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {AccountComponent} from './account/account.component';
import {AccountCardComponent} from './account/account-card.component';
import {AccountCardUserDetailsComponent} from './account/account-card-user-details.component';
import { AccountCardPasswordChangeComponent } from './account/account-card-password-change.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    MenuComponent,
    MenuFormComponent,
    TopNavigationComponent,
    RegisterComponent,
    RegisterFormComponent,
    AccountComponent,
    AccountCardComponent,
    AccountCardUserDetailsComponent,
    AccountCardPasswordChangeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
    MenuComponent,
    MenuFormComponent,
    TopNavigationComponent,
    RegisterComponent
  ]
})
export class LayoutModule {
}
