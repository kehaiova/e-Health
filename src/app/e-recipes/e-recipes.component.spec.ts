import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesComponent } from './e-recipes.component';

describe('ERecipesComponent', () => {
  let component: ERecipesComponent;
  let fixture: ComponentFixture<ERecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
