import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {StocksService} from '../services/stocks.service';
import {ISector, IStock} from '../models/stock.models';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiAppearance, TuiButton, TuiFormatNumberPipe, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiLike, TuiTab, TuiTabsHorizontal} from '@taiga-ui/kit';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {AsyncPipe, DatePipe} from '@angular/common';
import {SectorsService} from '../services/sectors.service';

@Component({
  selector: 'app-stock-detail',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiAppearance,
    TuiHeader,
    TuiTitle,
    TuiAvatar,
    TuiButton,
    TuiCurrencyPipe,
    AsyncPipe,
    TuiFormatNumberPipe,
    DatePipe,
    RouterLink,
    TuiLink,
    TuiLike,
    TuiTabsHorizontal,
    TuiTab
  ],
  templateUrl: './stock-detail.component.html',
  styleUrl: './stock-detail.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailComponent {
  protected stock = signal<IStock | null>(null);
  protected sectorName = signal<ISector['name'] | null>(null);
  protected today = Date.now();
  protected activeItemIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private stocksService: StocksService,
    private sectorsService: SectorsService,
  ) {}

  ngOnInit() {
    const stockShortName = this.route.snapshot.paramMap.get('name') ?? '';
    const stock = this.stocksService.getStock(stockShortName);

    if (stock) {
      const sector = this.sectorsService.getItemByCode(stock.sector);
      this.sectorName.set(sector?.name ?? '');
    }
    this.stock.set(stock);
  }

  onClick(tabName: string) {
    console.log('click', tabName);
  }
}
