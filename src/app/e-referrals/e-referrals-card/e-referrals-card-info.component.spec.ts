import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsCardInfoComponent } from './e-referrals-card-info.component';

describe('EReferralsCardInfoComponent', () => {
  let component: EReferralsCardInfoComponent;
  let fixture: ComponentFixture<EReferralsCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
