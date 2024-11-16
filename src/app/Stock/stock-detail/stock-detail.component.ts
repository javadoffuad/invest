import {Component, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StocksService} from '../services/stocks.service';
import {IStock} from '../models/stock.models';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiAppearance, TuiButton, TuiFormatNumberPipe, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-stock-detail',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiAppearance,
    TuiHeader,
    TuiTitle,
    TuiAvatar,
    TuiButton,
    TuiCurrencyPipe,
    AsyncPipe,
    TuiFormatNumberPipe
  ],
  templateUrl: './stock-detail.component.html',
  styleUrl: './stock-detail.component.less'
})
export class StockDetailComponent {
  protected stockShortName = signal<string>('');
  protected stock = signal<IStock | null>(null);

  constructor(
    private route: ActivatedRoute,
    private stocksService: StocksService,
  ) {}

  ngOnInit() {
    const stockShortName = this.route.snapshot.paramMap.get('name') ?? '';
    this.stockShortName.set(stockShortName);
    const stock = this.stocksService.getStock(stockShortName);
    this.stock.set(stock);
  }
}
