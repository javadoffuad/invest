import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSearchComponent } from './catalog-search.component';

describe('SectionsComponent', () => {
  let component: CatalogSearchComponent;
  let fixture: ComponentFixture<CatalogSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
