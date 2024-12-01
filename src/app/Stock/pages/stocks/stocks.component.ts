import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiFormatNumberPipe, TuiIconPipe, TuiTitle } from '@taiga-ui/core';
import { ISector, IStock } from '../../models/stock.models';
import { SectorsService } from '../../services/sectors/sectors.service';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiAvatar } from '@taiga-ui/kit';
import { StocksToolbarComponent } from './components/stocks-toolbar/stocks-toolbar.component';
import { FeatureStocksService } from './services/feature-stocks/feature-stocks.service';

@Component({
  selector: 'app-stocks',
  imports: [
    RouterLink,
    TuiTable,
    TuiFormatNumberPipe,
    AsyncPipe,
    TuiCurrencyPipe,
    TuiAvatar,
    TuiIconPipe,
    TuiTitle,
    StocksToolbarComponent,
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeatureStocksService],
})
export class StocksComponent {
  protected sectors = signal<ISector[]>([]);
  protected stocks: Signal<IStock[]>;
  protected currencies = signal(['USD', 'RUB', 'EUR']).asReadonly();
  protected countries = signal(['Russia', 'USA', 'Algeria', 'Egypt']).asReadonly();
  protected readonly displayedColumns: string[] = ['name', 'price', 'absolutePrice', 'chart'];

  constructor(
    private activitySectorsService: SectorsService,
    private featureStocksService: FeatureStocksService,
  ) {
    const sectors = this.activitySectorsService.getItems();
    this.sectors.set(sectors);
    this.stocks = this.featureStocksService.selectStocks();
  }

  ngOnInit() {
    this.featureStocksService.getStocks();
  }
}
