import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TuiAppearance, TuiButton, TuiFormatNumberPipe, TuiLink, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { RouterLink } from '@angular/router';
import { IPrice } from '../../models/stock.models';

@Component({
  selector: 'app-price-card',
  imports: [
    AsyncPipe,
    DatePipe,
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiCurrencyPipe,
    TuiFormatNumberPipe,
    TuiLink,
    TuiTitle,
    RouterLink,
  ],
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceCardComponent {
  public price = input.required<IPrice>();
  protected today = Date.now();
}
