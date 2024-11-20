import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IStock} from '../models/stock.models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent {
  stock = input<IStock | null>(null);
}
