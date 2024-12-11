import { Component, signal, Signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { StocksTableComponent } from '../../components/stocks-table/stocks-table.component';
import { IStock } from '../../models/stock.models';

@Component({
  selector: 'app-currencies',
  imports: [TuiTitle, StocksTableComponent],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.less',
})
export class CurrenciesComponent {
  protected currencies$: Signal<IStock[]> = signal([]);
}
