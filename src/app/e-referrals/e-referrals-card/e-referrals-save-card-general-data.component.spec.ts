import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsSaveCardGeneralDataComponent } from './e-referrals-save-card-general-data.component';

describe('EReferralsSaveCardGeneralDataComponent', () => {
  let component: EReferralsSaveCardGeneralDataComponent;
  let fixture: ComponentFixture<EReferralsSaveCardGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsSaveCardGeneralDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsSaveCardGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
