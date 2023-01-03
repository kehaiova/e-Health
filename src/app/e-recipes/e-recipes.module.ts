import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ERecipesComponent} from './e-recipes.component';
import {ERecipesCardComponent} from './e-recipes-card/e-recipes-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {ERecipesCardFormComponent} from './e-recipes-card/e-recipes-card-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {LayoutModule} from "../layout/layout.module";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ERecipesInfoComponent} from './e-recipes-card/e-recipes-info.component';
import {ERecipesGeneralDataComponent} from './e-recipes-card/e-recipes-general-data.component';
import {ERecipesMedicalPrescriptionsComponent} from './e-recipes-card/e-recipes-medical-prescriptions.component';
import {ERecipesSaveCardComponent} from './e-recipes-card/e-recipes-save-card.component';
import {ERecipesSaveCardGeneralDataComponent} from './e-recipes-card/e-recipes-save-card-general-data.component';
import {ERecipesSaveCardTableComponent} from './e-recipes-card/e-recipes-save-card-table.component';
import {NgEventBus} from "ng-event-bus";
import {ERecipesSaveCardInfoComponent} from './e-recipes-card/e-recipes-save-card-info.component';


@NgModule({
  declarations: [
    ERecipesComponent,
    ERecipesCardComponent,
    ERecipesCardFormComponent,
    ERecipesInfoComponent,
    ERecipesGeneralDataComponent,
    ERecipesMedicalPrescriptionsComponent,
    ERecipesSaveCardComponent,
    ERecipesSaveCardGeneralDataComponent,
    ERecipesSaveCardTableComponent,
    ERecipesSaveCardInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    LayoutModule,
    MatDividerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    ERecipesComponent,
    ERecipesCardComponent,
  ],
  providers: [FormGroupDirective,
    NgEventBus]
})
export class ERecipesModule {
}
