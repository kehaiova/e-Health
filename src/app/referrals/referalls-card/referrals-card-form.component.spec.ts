import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsCardFormComponent } from './referrals-card-form.component';

describe('ReferralsCardFormComponent', () => {
  let component: ReferralsCardFormComponent;
  let fixture: ComponentFixture<ReferralsCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralsCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
