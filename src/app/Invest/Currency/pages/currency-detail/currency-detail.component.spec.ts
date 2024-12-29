import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailComponent } from './currency-detail.component';

describe('StockItemComponent', () => {
  let component: CurrencyDetailComponent;
  let fixture: ComponentFixture<CurrencyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
