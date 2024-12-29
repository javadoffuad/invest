import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-currency-pulse',
  imports: [],
  templateUrl: './currency-pulse.component.html',
  styleUrl: './currency-pulse.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyPulseComponent {}
