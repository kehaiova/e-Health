import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { ERecipesModule } from './e-recipes/e-recipes.module';
import { OutpationListModule } from './outpation-list/outpation-list.module';
import { ReferralsModule } from './referrals/referrals.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    ERecipesModule,
    OutpationListModule,
    ReferralsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
