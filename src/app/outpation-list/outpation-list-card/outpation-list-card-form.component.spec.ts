import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpationListCardFormComponent } from './outpation-list-card-form.component';

describe('OutpationListCardFormComponent', () => {
  let component: OutpationListCardFormComponent;
  let fixture: ComponentFixture<OutpationListCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpationListCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpationListCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
