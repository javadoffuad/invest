import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPulseComponent } from './currency-pulse.component';

describe('StockPulseComponent', () => {
  let component: CurrencyPulseComponent;
  let fixture: ComponentFixture<CurrencyPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyPulseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
