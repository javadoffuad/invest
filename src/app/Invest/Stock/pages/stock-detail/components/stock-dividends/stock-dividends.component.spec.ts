import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDividendsComponent } from './stock-dividends.component';

describe('StockDividendsComponent', () => {
  let component: StockDividendsComponent;
  let fixture: ComponentFixture<StockDividendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDividendsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockDividendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
