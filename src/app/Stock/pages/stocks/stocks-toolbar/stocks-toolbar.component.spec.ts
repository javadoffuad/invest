import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksToolbarComponent } from './stocks-toolbar.component';

describe('StocksToolbarComponent', () => {
  let component: StocksToolbarComponent;
  let fixture: ComponentFixture<StocksToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
