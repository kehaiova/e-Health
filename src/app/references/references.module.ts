import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {ReferencesComponent} from './references.component';
import {LayoutModule} from "../layout/layout.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {
  ReferencesCardERecipesTableComponent
} from './references-card-e-recipes/references-card-e-recipes-table.component';
import {
  ReferencesCardERecipesFormComponent
} from "./references-card-e-recipes/references-card-e-recipes-form.component";
import {
  ReferencesCardReferralsFormComponent
} from './references-card-referrals/references-card-referrals-form.component';
import {
  ReferencesCardReferralsTableComponent
} from './references-card-referrals/references-card-referrals-table.component';
import {ReferencesCardComponent} from "./references-card/references-card.component";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatPaginatorIntlBg} from "../config/MatPaginatorIntlBg";


@NgModule({
  declarations: [
    ReferencesCardComponent,
    ReferencesComponent,
    ReferencesCardERecipesFormComponent,
    ReferencesCardERecipesTableComponent,
    ReferencesCardReferralsFormComponent,
    ReferencesCardReferralsTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    LayoutModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlBg}
  ]
})
export class ReferencesModule {
}
