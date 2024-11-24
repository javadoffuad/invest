import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNewsComponent } from './stock-news.component';

describe('StockNewsComponent', () => {
  let component: StockNewsComponent;
  let fixture: ComponentFixture<StockNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
