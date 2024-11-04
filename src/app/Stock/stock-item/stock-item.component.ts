import { Component, Input } from '@angular/core';
import { IStock } from '../models/stock.models';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.less'
})
export class StockItemComponent {
  @Input({required: true}) stock: IStock | null = null;
}
