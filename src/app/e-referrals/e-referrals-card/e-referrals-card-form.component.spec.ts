import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsCardFormComponent } from './e-referrals-card-form.component';

describe('EReferralsCardFormComponent', () => {
  let component: EReferralsCardFormComponent;
  let fixture: ComponentFixture<EReferralsCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
