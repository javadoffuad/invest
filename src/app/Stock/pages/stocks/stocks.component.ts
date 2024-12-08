import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { ISector, IStock } from '../../models/stock.models';
import { SectorsService } from '../../services/sectors/sectors.service';
import { StocksToolbarComponent } from './components/stocks-toolbar/stocks-toolbar.component';
import { CatalogSearchComponent } from './components/catalog-search/catalog-search.component';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';
import { FeatureStocksService } from './services/feature-stocks/feature-stocks.service';

@Component({
  selector: 'app-stocks',
  imports: [TuiTitle, StocksToolbarComponent, CatalogSearchComponent, StocksTableComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeatureStocksService],
})
export class StocksComponent {
  protected sectors = signal<ISector[]>([]);
  protected stocks: Signal<IStock[]>;
  protected currencies = signal(['USD', 'RUB', 'EUR']).asReadonly();
  protected countries = signal(['Russia', 'USA', 'Algeria', 'Egypt']).asReadonly();

  constructor(
    private activitySectorsService: SectorsService,
    private featureStocksService: FeatureStocksService,
  ) {
    const sectors = this.activitySectorsService.getItems();
    this.sectors.set(sectors);
    this.stocks = this.featureStocksService.selectStocks();
  }

  ngOnInit() {
    this.featureStocksService.getStocks();
  }
}
