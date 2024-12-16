import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { ICurrency } from '../models/currency.models';
import { CurrenciesService } from '../Stock/services/currencies/currencies.service';
import { PriceCardComponent } from '../components/price-card/price-card.component';

@Component({
  selector: 'app-currency-detail',
  imports: [
    RouterLink,
    TuiTabsHorizontal,
    TuiTab,
    StockCardComponent,
    PriceCardComponent,
    RouterOutlet,
  ],
  templateUrl: './currency-detail.component.html',
  styleUrl: './currency-detail.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyDetailComponent implements OnInit {
  protected currency = signal<ICurrency | null>(null);
  protected activeItemIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private currenciesService: CurrenciesService,
  ) {}

  ngOnInit() {
    const ticker = this.route.snapshot.paramMap.get('ticker') ?? '';
    const currency = this.currenciesService.getItem(ticker);
    this.currency.set(currency);
  }

  onClick(sectionName: string) {
    console.log('click', sectionName);
  }
}
