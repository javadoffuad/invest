import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';
import { ICurrency } from '../../../models/currency.models';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { PAGE_CURRENCIES, PAGE_CURRENCIES_PARAM } from '../../../constants/invest.constants';
import { FeatureCurrenciesService } from '../../services/feature-currencies/feature-currencies.service';
import { PriceCardComponent } from '../../../components/price-card/price-card.component';

@Component({
  selector: 'app-currency-detail',
  imports: [
    RouterLink,
    TuiTabsHorizontal,
    TuiTab,
    PriceCardComponent,
    RouterOutlet,
    CurrencyCardComponent,
  ],
  templateUrl: './currency-detail.component.html',
  styleUrl: './currency-detail.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyDetailComponent implements OnInit {
  protected readonly currenciesPage = PAGE_CURRENCIES;
  protected currency = signal<ICurrency | null>(null);
  protected activeTabIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private featureCurrenciesService: FeatureCurrenciesService,
  ) {}

  ngOnInit() {
    const ticker = this.route.snapshot.paramMap.get(PAGE_CURRENCIES_PARAM) ?? '';
    this.featureCurrenciesService.getCurrencyByTicker(ticker);

    const currency = this.featureCurrenciesService.selectCurrencyByTicker(ticker);
    this.currency.set(currency());
  }

  onClick(sectionName: string) {
    console.log('click', sectionName);
  }

  toggleFavorite(currency: ICurrency): void {
    this.featureCurrenciesService.setCurrency({ ...currency, isFavorite: !currency.isFavorite });
  }
}
