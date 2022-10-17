import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpationListCardComponent } from './outpation-list-card.component';

describe('OutpationListCardComponent', () => {
  let component: OutpationListCardComponent;
  let fixture: ComponentFixture<OutpationListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpationListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpationListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
