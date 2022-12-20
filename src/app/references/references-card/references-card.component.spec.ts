import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesCardComponent } from './references-card.component';

describe('ReferencesCardComponent', () => {
  let component: ReferencesCardComponent;
  let fixture: ComponentFixture<ReferencesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
