import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPulseComponent } from './stock-pulse.component';

describe('StockPulseComponent', () => {
  let component: StockPulseComponent;
  let fixture: ComponentFixture<StockPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPulseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
