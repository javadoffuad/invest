import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReviewComponent } from './stock-review.component';

describe('StockReviewComponent', () => {
  let component: StockReviewComponent;
  let fixture: ComponentFixture<StockReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
