import {Component, inject, Signal} from '@angular/core';
import {IStock} from '../../../../models/stock.models';
import {ROUTER_OUTLET_DATA} from '@angular/router';

@Component({
    selector: 'app-stock-review',
    imports: [],
    templateUrl: './stock-review.component.html',
    styleUrl: './stock-review.component.less'
})
export class StockReviewComponent {
  stock = inject<Signal<IStock>>(ROUTER_OUTLET_DATA);
}
