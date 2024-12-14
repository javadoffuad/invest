import { Component, Signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { InvestTableComponent } from '../../components/invest-table/invest-table.component';
import { FeatureCurrenciesService } from '../../Stock/pages/stocks/services/feature-currencies/feature-currencies.service';
import { ICurrency } from '../../models/currency.models';

@Component({
  selector: 'app-currencies',
  imports: [TuiTitle, InvestTableComponent],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.less',
  providers: [FeatureCurrenciesService],
})
export class CurrenciesComponent {
  protected currencies$: Signal<ICurrency[]>;

  constructor(private featureCurrenciesService: FeatureCurrenciesService) {
    this.currencies$ = this.featureCurrenciesService.selectCurrencies();
  }

  ngOnInit() {
    this.featureCurrenciesService.getCurrencies();
  }
}
