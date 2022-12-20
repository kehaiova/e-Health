import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesMedicalPrescriptionsComponent } from './e-recipes-medical-prescriptions.component';

describe('ERecipesMedicalPrescriptionsComponent', () => {
  let component: ERecipesMedicalPrescriptionsComponent;
  let fixture: ComponentFixture<ERecipesMedicalPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesMedicalPrescriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesMedicalPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
