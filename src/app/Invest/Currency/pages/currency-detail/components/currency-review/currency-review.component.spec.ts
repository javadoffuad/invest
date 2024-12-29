import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyReviewComponent } from './currency-review.component';

describe('StockReviewComponent', () => {
  let component: CurrencyReviewComponent;
  let fixture: ComponentFixture<CurrencyReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
