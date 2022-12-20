import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardUserDetailsComponent } from './account-card-user-details.component';

describe('AccountCardUserDetailsComponent', () => {
  let component: AccountCardUserDetailsComponent;
  let fixture: ComponentFixture<AccountCardUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCardUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
