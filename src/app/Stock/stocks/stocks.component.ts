import { Component, signal } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { IActivitySector, IStock } from '../models/stock.models';
import { StockItemComponent } from "../stock-item/stock-item.component";
import {StocksService} from '../services/stocks.service';
import {ActivitySectorsService} from '../services/activity-sectors.service';
import {CurrencyPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [StockItemComponent, MatTableModule, CurrencyPipe, RouterLink],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less'
})
export class StocksComponent {
  protected activitySectors = signal<IActivitySector[]>([]);
  protected stocks = signal<IStock[]>([]);
  protected readonly displayedColumns: string[] = ['id', 'name', 'price', 'minPriceIncrement'];

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
