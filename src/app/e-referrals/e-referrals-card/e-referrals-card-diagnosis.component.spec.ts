import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsCardDiagnosisComponent } from './e-referrals-card-diagnosis.component';

describe('EReferralsCardDiagnosisComponent', () => {
  let component: EReferralsCardDiagnosisComponent;
  let fixture: ComponentFixture<EReferralsCardDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsCardDiagnosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsCardDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
