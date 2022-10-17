import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesCardComponent } from './e-recipes-card.component';

describe('ERecipesCardComponent', () => {
  let component: ERecipesCardComponent;
  let fixture: ComponentFixture<ERecipesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
