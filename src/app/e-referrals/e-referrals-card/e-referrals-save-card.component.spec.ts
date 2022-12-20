import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsSaveCardComponent } from './e-referrals-save-card.component';

describe('EReferralsSaveCardComponent', () => {
  let component: EReferralsSaveCardComponent;
  let fixture: ComponentFixture<EReferralsSaveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsSaveCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsSaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
