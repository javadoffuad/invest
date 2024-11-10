import { Component, signal } from '@angular/core';
import { IActivitySector, IStock } from '../models/stock.models';
import { StockItemComponent } from "../stock-item/stock-item.component";
import {StocksService} from '../services/stocks.service';
import {ActivitySectorsService} from '../services/activity-sectors.service';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [StockItemComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less'
})
export class StocksComponent {
  protected activitySectors = signal<IActivitySector[]>([]);
  protected stocks = signal<IStock[]>([]);

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
