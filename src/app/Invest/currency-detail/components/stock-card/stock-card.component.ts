import { Component, input } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiLike } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-stock-card',
  imports: [TuiAppearance, TuiAvatar, TuiCardLarge, TuiLike, TuiTitle],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.less',
})
export class StockCardComponent {
  public brandName = input.required<string>();
  public ticker = input.required<string>();
  public brandLogo = input.required<string>();
  public sectorName = input<string>();
}
