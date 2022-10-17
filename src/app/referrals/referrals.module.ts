import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferallsCardComponent } from './referalls-card/referalls-card.component';
import { ReferallsComponent } from './referalls.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { ReferralsCardFormComponent } from './referalls-card/referrals-card-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ReferallsCardComponent,
    ReferallsComponent,
    ReferralsCardFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    ReferallsCardComponent,
    ReferallsComponent
  ]
})
export class ReferralsModule { }
