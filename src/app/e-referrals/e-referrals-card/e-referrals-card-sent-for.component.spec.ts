import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferralsCardSentForComponent } from './e-referrals-card-sent-for.component';

describe('EReferralsCardSentForComponent', () => {
  let component: EReferralsCardSentForComponent;
  let fixture: ComponentFixture<EReferralsCardSentForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReferralsCardSentForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReferralsCardSentForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
