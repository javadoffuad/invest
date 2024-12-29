import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyNewsComponent } from './currency-news.component';

describe('StockNewsComponent', () => {
  let component: CurrencyNewsComponent;
  let fixture: ComponentFixture<CurrencyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyNewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
