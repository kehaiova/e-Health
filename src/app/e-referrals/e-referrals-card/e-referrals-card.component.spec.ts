import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsCardComponent } from './e-referrals-card.component';

describe('EReferralsCardComponent', () => {
  let component: EReferralsCardComponent;
  let fixture: ComponentFixture<EReferralsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
