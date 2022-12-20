import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesCardERecipesFormComponent } from './references-card-e-recipes-form.component';

describe('ReferencesCardERecipesFormComponent', () => {
  let component: ReferencesCardERecipesFormComponent;
  let fixture: ComponentFixture<ReferencesCardERecipesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesCardERecipesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesCardERecipesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
