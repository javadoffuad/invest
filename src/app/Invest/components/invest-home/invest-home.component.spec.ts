import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestHomeComponent } from './invest-home.component';

describe('InvestComponent', () => {
  let component: InvestHomeComponent;
  let fixture: ComponentFixture<InvestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
