import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsSaveCardDiagnosisComponent } from './e-referrals-save-card-diagnosis.component';

describe('EReferralsSaveCardDiagnosisComponent', () => {
  let component: EReferralsSaveCardDiagnosisComponent;
  let fixture: ComponentFixture<EReferralsSaveCardDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsSaveCardDiagnosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsSaveCardDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
