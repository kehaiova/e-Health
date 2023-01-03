import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesSaveCardInfoComponent } from './e-recipes-save-card-info.component';

describe('ERecipesSaveCardInfoComponent', () => {
  let component: ERecipesSaveCardInfoComponent;
  let fixture: ComponentFixture<ERecipesSaveCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesSaveCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesSaveCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
