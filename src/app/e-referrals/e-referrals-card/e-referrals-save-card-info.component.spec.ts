import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsSaveCardInfoComponent } from './e-referrals-save-card-info.component';

describe('EReferralsSaveCardInfoComponent', () => {
  let component: EReferralsSaveCardInfoComponent;
  let fixture: ComponentFixture<EReferralsSaveCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsSaveCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsSaveCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
