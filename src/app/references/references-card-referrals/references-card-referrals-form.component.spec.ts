import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesCardReferralsFormComponent } from './references-card-referrals-form.component';

describe('ReferencesCardReferralsFormComponent', () => {
  let component: ReferencesCardReferralsFormComponent;
  let fixture: ComponentFixture<ReferencesCardReferralsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesCardReferralsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesCardReferralsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
