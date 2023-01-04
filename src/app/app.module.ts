import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from './layout/layout.module';
import {MatIconModule} from '@angular/material/icon';
import {ERecipesModule} from './e-recipes/e-recipes.module';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClientModule} from "@angular/common/http";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {CustomDateAdapter} from "./config/CustomDateAdapter";
import {ReferencesModule} from "./references/references.module";
import {EReferralsModule} from "./e-referrals/e-referrals.module";
import {registerLocaleData} from "@angular/common";
import localeBg from '@angular/common/locales/bg';

registerLocaleData(localeBg);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    ERecipesModule,
    ReferencesModule,
    EReferralsModule
  ],
  providers: [MatTableDataSource,
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_LOCALE, useValue: 'bg-BG'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
