import { Component, signal } from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe} from '@taiga-ui/core';
import { IActivitySector, IStock } from '../models/stock.models';
import {StocksService} from '../services/stocks.service';
import {ActivitySectorsService} from '../services/activity-sectors.service';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, TuiTable, TuiFormatNumberPipe, NgForOf, AsyncPipe, TuiCurrencyPipe],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less'
})
export class StocksComponent {
  protected activitySectors = signal<IActivitySector[]>([]);
  protected stocks = signal<IStock[]>([]);
  protected readonly displayedColumns: string[] = ['name', 'price', 'absolutePrice'];

  constructor(
    private stocksService: StocksService,
    private activitySectorsService: ActivitySectorsService,
  ) {
    const stocks = this.stocksService.getStocks();
    const sectors = this.activitySectorsService.getItems();
    this.stocks.set(stocks);
    this.activitySectors.set(sectors);
  }
}
