import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpationListComponent } from './outpation-list.component';

describe('OutpationListComponent', () => {
  let component: OutpationListComponent;
  let fixture: ComponentFixture<OutpationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
