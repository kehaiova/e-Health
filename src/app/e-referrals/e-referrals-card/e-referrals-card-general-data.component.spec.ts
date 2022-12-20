import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsCardGeneralDataComponent } from './e-referrals-card-general-data.component';

describe('EReferralsCardGeneralDataComponent', () => {
  let component: EReferralsCardGeneralDataComponent;
  let fixture: ComponentFixture<EReferralsCardGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsCardGeneralDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsCardGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
