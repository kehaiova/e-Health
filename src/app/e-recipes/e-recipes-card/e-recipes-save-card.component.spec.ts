import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesSaveCardComponent } from './e-recipes-save-card.component';

describe('ERecipesSaveCardComponent', () => {
  let component: ERecipesSaveCardComponent;
  let fixture: ComponentFixture<ERecipesSaveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesSaveCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesSaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
