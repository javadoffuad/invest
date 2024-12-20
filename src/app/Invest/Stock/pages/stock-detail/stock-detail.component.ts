import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { StocksService } from '../../services/stocks/stocks.service';
import { ISector, IStock } from '../../../models/stock.models';
import { TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';
import { SectorsService } from '../../services/sectors/sectors.service';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { PAGE_STOCKS, PAGE_STOCKS_PARAM } from '../../../constants/invest.constants';

@Component({
  selector: 'app-stock-detail',
  imports: [
    RouterLink,
    TuiTabsHorizontal,
    TuiTab,
    StockCardComponent,
    PriceCardComponent,
    RouterOutlet,
  ],
  templateUrl: './stock-detail.component.html',
  styleUrl: './stock-detail.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailComponent implements OnInit {
  protected readonly stocksPage = PAGE_STOCKS;
  protected stock = signal<IStock | null>(null);
  protected sectorName = signal<ISector['name'] | null>(null);
  protected activeItemIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private stocksService: StocksService,
    private sectorsService: SectorsService,
  ) {}

  ngOnInit() {
    const stockShortName = this.route.snapshot.paramMap.get(PAGE_STOCKS_PARAM) ?? '';
    const stock = this.stocksService.getStock(stockShortName);

    if (stock) {
      const sector = this.sectorsService.getItemByCode(stock.sector);
      this.sectorName.set(sector?.name ?? '');
    }
    this.stock.set(stock);
  }

  onClick(sectionName: string) {
    console.log('click', sectionName);
  }
}
