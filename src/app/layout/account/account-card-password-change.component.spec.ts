import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardPasswordChangeComponent } from './account-card-password-change.component';

describe('AccountCardPasswordChangeComponent', () => {
  let component: AccountCardPasswordChangeComponent;
  let fixture: ComponentFixture<AccountCardPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardPasswordChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCardPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
