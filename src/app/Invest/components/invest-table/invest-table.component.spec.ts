import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestTableComponent } from './invest-table.component';

describe('StocksTableComponent', () => {
  let component: InvestTableComponent;
  let fixture: ComponentFixture<InvestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
