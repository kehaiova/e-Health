import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutpationListCardComponent } from './outpation-list-card/outpation-list-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { OutpationListComponent } from './outpation-list.component';
import { OutpationListCardFormComponent } from './outpation-list-card/outpation-list-card-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    OutpationListCardComponent,
    OutpationListComponent,
    OutpationListCardFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    OutpationListComponent,
    OutpationListCardComponent,
  ]
})
export class OutpationListModule {
}
