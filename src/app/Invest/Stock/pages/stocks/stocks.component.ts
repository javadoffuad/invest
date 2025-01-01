import { ChangeDetectionStrategy, Component, OnInit, Signal, signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { ISector, IStock } from '../../../models/stock.models';
import { SectorsService } from '../../../services/sectors/sectors.service';
import { StocksToolbarComponent } from './components/stocks-toolbar/stocks-toolbar.component';
import { InvestTableComponent } from '../../../components/invest-table/invest-table.component';
import { FeatureStocksService } from '../../services/feature-stocks/feature-stocks.service';
import { Router } from '@angular/router';
import { PAGE_STOCKS } from '../../../constants/invest.constants';
import { FeatureDictionariesService } from '../../../services/feature-dictionaries/feature-dictionaries.service';

@Component({
  selector: 'app-stocks',
  imports: [TuiTitle, StocksToolbarComponent, InvestTableComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeatureStocksService, FeatureDictionariesService],
})
export class StocksComponent implements OnInit {
  protected sectors = signal<ISector[]>([]);
  protected stocks: Signal<IStock[]>;
  protected currencies = signal(['USD', 'RUB', 'EUR']).asReadonly();
  protected countries = signal(['Russia', 'USA', 'Algeria', 'Egypt']).asReadonly();

  constructor(
    private router: Router,
    private sectorsService: SectorsService,
    private featureStocksService: FeatureStocksService,
  ) {
    const sectors = this.sectorsService.getItems();
    this.sectors.set(sectors);
    this.stocks = this.featureStocksService.selectStocks();
  }

  ngOnInit() {
    this.featureStocksService.getStocks();
  }

  protected openStock(ticker: IStock['ticker']): void {
    this.router.navigate([`/${PAGE_STOCKS}/` + ticker]);
  }
}
