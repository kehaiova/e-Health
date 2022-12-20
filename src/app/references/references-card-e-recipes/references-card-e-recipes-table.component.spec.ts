import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesCardERecipesTableComponent } from './references-card-e-recipes-table.component';

describe('ReferencesCardERecipesTableComponent', () => {
  let component: ReferencesCardERecipesTableComponent;
  let fixture: ComponentFixture<ReferencesCardERecipesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesCardERecipesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesCardERecipesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
