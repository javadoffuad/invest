import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiFormatNumberPipe, TuiIconPipe, TuiTitle } from '@taiga-ui/core';
import { ISector, IStock } from '../../models/stock.models';
import { StocksService } from '../../services/stocks.service';
import { SectorsService } from '../../services/sectors.service';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiAvatar } from '@taiga-ui/kit';
import { StocksToolbarComponent } from './components/stocks-toolbar/stocks-toolbar.component';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [
    RouterLink,
    TuiTable,
    TuiFormatNumberPipe,
    NgForOf,
    AsyncPipe,
    TuiCurrencyPipe,
    TuiAvatar,
    TuiIconPipe,
    TuiTitle,
    StocksToolbarComponent,
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksComponent {
  protected sectors = signal<ISector[]>([]);
  protected stocks = signal<IStock[]>([]);
  protected readonly displayedColumns: string[] = ['name', 'price', 'absolutePrice'];
  protected currencies = signal(['USD', 'RUB', 'EUR']).asReadonly();
  protected countries = signal(['Russia', 'USA', 'Algeria', 'Egypt']).asReadonly();

  constructor(
    private stocksService: StocksService,
    private activitySectorsService: SectorsService,
  ) {
    const stocks = this.stocksService.getStocks();
    const sectors = this.activitySectorsService.getItems();
    this.stocks.set(stocks);
    this.sectors.set(sectors);
  }
}
