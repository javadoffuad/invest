import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-currency-pulse',
  imports: [],
  templateUrl: './stock-pulse.component.html',
  styleUrl: './stock-pulse.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockPulseComponent {}
