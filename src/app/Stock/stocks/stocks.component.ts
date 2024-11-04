import { Component, signal } from '@angular/core';
import { IActivitySector, IStock } from '../models/stock.models';
import { StockItemComponent } from "../stock-item/stock-item.component";
import { mockActivitySectors, mockStocks } from '../mocks/stocks.mock';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [StockItemComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less'
})
export class StocksComponent {
  protected activitySectors = signal<IActivitySector[]>(mockActivitySectors);
  protected stocks = signal<IStock[]>(mockStocks);
}
