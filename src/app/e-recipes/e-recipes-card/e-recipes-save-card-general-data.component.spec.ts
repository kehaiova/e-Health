import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesSaveCardGeneralDataComponent } from './e-recipes-save-card-general-data.component';

describe('ERecipesSaveCardGeneralDataComponent', () => {
  let component: ERecipesSaveCardGeneralDataComponent;
  let fixture: ComponentFixture<ERecipesSaveCardGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesSaveCardGeneralDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesSaveCardGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
