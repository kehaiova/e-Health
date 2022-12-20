import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesCardReferralsTableComponent } from './references-card-referrals-table.component';

describe('ReferencesCardReferralsTableComponent', () => {
  let component: ReferencesCardReferralsTableComponent;
  let fixture: ComponentFixture<ReferencesCardReferralsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesCardReferralsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesCardReferralsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
