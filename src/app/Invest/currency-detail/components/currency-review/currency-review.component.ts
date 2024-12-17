import { Component, inject, Signal } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { ICurrency } from '../../../models/currency.models';

@Component({
  selector: 'app-currency-review',
  imports: [TuiTitle, TuiAvatar],
  templateUrl: './currency-review.component.html',
  styleUrl: './currency-review.component.less',
})
export class CurrencyReviewComponent {
  protected currency$ = inject<Signal<ICurrency>>(ROUTER_OUTLET_DATA);
}
