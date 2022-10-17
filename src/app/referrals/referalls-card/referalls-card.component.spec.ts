import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferallsCardComponent } from './referalls-card.component';

describe('ReferallsCardComponent', () => {
  let component: ReferallsCardComponent;
  let fixture: ComponentFixture<ReferallsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferallsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferallsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
