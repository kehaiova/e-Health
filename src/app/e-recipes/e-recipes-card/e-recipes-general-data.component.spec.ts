import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesGeneralDataComponent } from './e-recipes-general-data.component';

describe('ERecipesGeneralDataComponent', () => {
  let component: ERecipesGeneralDataComponent;
  let fixture: ComponentFixture<ERecipesGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesGeneralDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
