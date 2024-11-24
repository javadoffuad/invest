import {Component, input} from '@angular/core';
import {AsyncPipe, DatePipe} from '@angular/common';
import {TuiAppearance, TuiButton, TuiFormatNumberPipe, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {IPrice} from '../../../../models/stock.models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-price-card',
  standalone: true,
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
    RouterLink
  ],
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.less'
})
export class PriceCardComponent {
  public price = input.required<IPrice>();
  protected today = Date.now();
}
