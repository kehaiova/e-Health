import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferallsComponent } from './referalls.component';

describe('ReferallsComponent', () => {
  let component: ReferallsComponent;
  let fixture: ComponentFixture<ReferallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
