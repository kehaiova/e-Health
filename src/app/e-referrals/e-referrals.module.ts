import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EReferralsComponent } from './e-referrals.component';
import { EReferralsCardComponent } from './e-referrals-card/e-referrals-card.component';
import { EReferralsCardFormComponent } from './e-referrals-card/e-referrals-card-form.component';
import {LayoutModule} from "../layout/layout.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import { EReferralsCardGeneralDataComponent } from './e-referrals-card/e-referrals-card-general-data.component';
import { EReferralsCardDiagnosisComponent } from './e-referrals-card/e-referrals-card-diagnosis.component';
import {MatButtonModule} from "@angular/material/button";
import { EReferralsCardSentForComponent } from './e-referrals-card/e-referrals-card-sent-for.component';
import { EReferralsCardInfoComponent } from './e-referrals-card/e-referrals-card-info.component';
import { EReferralsSaveCardComponent } from './e-referrals-card/e-referrals-save-card.component';
import { EReferralsSaveCardGeneralDataComponent } from './e-referrals-card/e-referrals-save-card-general-data.component';
import { EReferralsSaveCardDiagnosisComponent } from './e-referrals-card/e-referrals-save-card-diagnosis.component';



@NgModule({
  declarations: [
    EReferralsComponent,
    EReferralsCardComponent,
    EReferralsCardFormComponent,
    EReferralsCardGeneralDataComponent,
    EReferralsCardDiagnosisComponent,
    EReferralsCardSentForComponent,
    EReferralsCardInfoComponent,
    EReferralsSaveCardComponent,
    EReferralsSaveCardGeneralDataComponent,
    EReferralsSaveCardDiagnosisComponent
  ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatStepperModule,
        MatIconModule,
        FormsModule,
        MatDividerModule,
        MatButtonModule,
        ReactiveFormsModule

    ],
  providers: [
    FormGroupDirective
  ]
})
export class EReferralsModule { }
