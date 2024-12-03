import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiFormatNumberPipe, TuiIconPipe, TuiPoint, TuiTitle } from '@taiga-ui/core';
import { ISector, IStock } from '../../models/stock.models';
import { StocksService } from '../../services/stocks/stocks.service';
import { SectorsService } from '../../services/sectors/sectors.service';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiAvatar } from '@taiga-ui/kit';
import { StocksToolbarComponent } from './components/stocks-toolbar/stocks-toolbar.component';
import { TuiAxes, TuiLineChart } from '@taiga-ui/addon-charts';

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
    TuiAxes,
    TuiLineChart,
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksComponent {
  protected sectors = signal<ISector[]>([]);
  protected stocks = signal<IStock[]>([]);
  protected currencies = signal(['USD', 'RUB', 'EUR']).asReadonly();
  protected countries = signal(['Russia', 'USA', 'Algeria', 'Egypt']).asReadonly();
  protected readonly displayedColumns: string[] = ['name', 'price', 'absolutePrice', 'chart'];
  protected readonly negativeChartValue: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
  protected readonly positiveChartValue: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];

  constructor(
    private stocksService: StocksService,
    private activitySectorsService: SectorsService,
  ) {
    const stocks = this.stocksService.getStocks();
    const sectors = this.activitySectorsService.getItems();
    this.stocks.set(stocks);
    this.sectors.set(sectors);
  }
}
