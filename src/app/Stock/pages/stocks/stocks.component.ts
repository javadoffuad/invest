import {ChangeDetectionStrategy, Component, Signal, signal} from '@angular/core';
import {AsyncPipe, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe, TuiIconPipe, TuiTitle} from '@taiga-ui/core';
import {ISector, IStock} from '../../models/stock.models';
import {SectorsService} from '../../services/sectors.service';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiAvatar} from '@taiga-ui/kit';
import {FeatureStocksService} from './services/feature-stocks/feature-stocks.service';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [
    RouterLink,
    TuiTable,
    TuiFormatNumberPipe,
    NgForOf,
    AsyncPipe,
    TuiCurrencyPipe,
    TuiAvatar,
    TuiIconPipe,
    TuiTitle,
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeatureStocksService],
})
export class StocksComponent {
  protected activitySectors = signal<ISector[]>([]);
  protected stocks: Signal<IStock[]>;
  protected readonly displayedColumns: string[] = [
    'name',
    'price',
    'absolutePrice',
  ];

  constructor(
    private activitySectorsService: SectorsService,
    private featureStocksService: FeatureStocksService,
  ) {
    const sectors = this.activitySectorsService.getItems();
    this.activitySectors.set(sectors);
    this.stocks = this.featureStocksService.selectStocks();
  }

  ngOnInit() {
    this.featureStocksService.getStocks();
  }
}
