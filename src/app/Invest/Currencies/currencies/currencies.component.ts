import { Component, Signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { StocksTableComponent } from '../../components/stocks-table/stocks-table.component';
import { IStock } from '../../models/stock.models';
import { FeatureCurrenciesService } from '../../Stock/pages/stocks/services/feature-currencies/feature-currencies.service';

@Component({
  selector: 'app-currencies',
  imports: [TuiTitle, StocksTableComponent],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.less',
  providers: [FeatureCurrenciesService],
})
export class CurrenciesComponent {
  protected currencies$: Signal<IStock[]>;

  constructor(private featureCurrenciesService: FeatureCurrenciesService) {
    this.currencies$ = this.featureCurrenciesService.selectCurrencies();
  }
}
