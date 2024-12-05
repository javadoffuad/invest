import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { ISector, IStock } from '../../models/stock.models';
import { StocksService } from '../../services/stocks/stocks.service';
import { SectorsService } from '../../services/sectors/sectors.service';
import { StocksToolbarComponent } from './components/stocks-toolbar/stocks-toolbar.component';
import { CatalogSearchComponent } from './components/catalog-search/catalog-search.component';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';

@Component({
  selector: 'app-stocks',
  imports: [TuiTitle, StocksToolbarComponent, CatalogSearchComponent, StocksTableComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksComponent {
  protected sectors = signal<ISector[]>([]);
  protected stocks = signal<IStock[]>([]);
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
