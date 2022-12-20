import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERecipesInfoComponent } from './e-recipes-info.component';

describe('ERecipesInfoComponent', () => {
  let component: ERecipesInfoComponent;
  let fixture: ComponentFixture<ERecipesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERecipesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERecipesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
