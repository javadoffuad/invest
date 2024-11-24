import {Component, input} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiLike} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {ISector, IStock} from '../../../../models/stock.models';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiAvatar,
    TuiCardLarge,
    TuiLike,
    TuiTitle
  ],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.less'
})
export class StockCardComponent {
  public stock = input.required<IStock>();
  public sectorName = input.required<ISector['name'] | null>();
}
