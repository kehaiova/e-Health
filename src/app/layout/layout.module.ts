import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule} from '@angular/material/checkbox'
import { MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu/menu-form.component'


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    LoginFormComponent,
    MenuComponent,
    MenuFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
    MenuComponent,
    MenuFormComponent
  ]
})
export class LayoutModule { }
