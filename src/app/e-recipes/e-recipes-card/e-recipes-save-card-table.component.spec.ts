import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesSaveCardTableComponent } from './e-recipes-save-card-table.component';

describe('ERecipesSaveCardTableComponent', () => {
  let component: ERecipesSaveCardTableComponent;
  let fixture: ComponentFixture<ERecipesSaveCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesSaveCardTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesSaveCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
