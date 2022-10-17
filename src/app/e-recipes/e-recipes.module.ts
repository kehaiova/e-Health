import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ERecipesComponent } from './e-recipes.component';
import { LayoutModule } from '../layout/layout.module';
import { ERecipesCardComponent } from './e-recipes-card/e-recipes-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { ERecipesCardFormComponent } from './e-recipes-card/e-recipes-card-form.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ERecipesComponent,
    ERecipesCardComponent,
    ERecipesCardFormComponent
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
    ERecipesComponent,
    ERecipesCardComponent,
  ]
})
export class ERecipesModule { }
