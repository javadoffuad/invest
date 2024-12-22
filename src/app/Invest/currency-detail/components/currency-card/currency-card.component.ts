import { Component, input, output } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiLike } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-currency-card',
  imports: [TuiAppearance, TuiAvatar, TuiCardLarge, TuiLike, TuiTitle],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.less',
})
export class CurrencyCardComponent {
  brandName = input.required<string>();
  ticker = input.required<string>();
  brandLogo = input.required<string>();
  sectorName = input<string>();

  toggleFavorite = output<string>();

  favorite(event: any): void {
    this.toggleFavorite.emit(this.ticker());
  }
}
