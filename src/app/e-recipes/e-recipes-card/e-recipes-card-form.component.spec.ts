import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesCardFormComponent } from './e-recipes-card-form.component';

describe('ERecipesCardFormComponent', () => {
  let component: ERecipesCardFormComponent;
  let fixture: ComponentFixture<ERecipesCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
