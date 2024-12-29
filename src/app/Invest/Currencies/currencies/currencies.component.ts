import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { InvestTableComponent } from '../../components/invest-table/invest-table.component';
import { FeatureCurrenciesService } from '../../Stock/pages/stocks/services/feature-currencies/feature-currencies.service';
import { ICurrency } from '../../models/currency.models';
import { Router } from '@angular/router';
import { PAGE_CURRENCIES } from '../../constants/invest.constants';

@Component({
  selector: 'app-currencies',
  imports: [TuiTitle, InvestTableComponent],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.less',
  providers: [FeatureCurrenciesService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrenciesComponent {
  protected currencies$: Signal<ICurrency[]>;

  constructor(
    private router: Router,
    private featureCurrenciesService: FeatureCurrenciesService,
  ) {
    this.currencies$ = this.featureCurrenciesService.selectCurrencies();
  }

  ngOnInit() {
    this.featureCurrenciesService.getCurrencies();
  }

  protected openCurrency(ticker: ICurrency['ticker']): void {
    this.router.navigate([`/${PAGE_CURRENCIES}/` + ticker]);
  }
}
