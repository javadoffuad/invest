import { Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { StocksActions } from '../../../../store/stocks/actions/stocks.actions';
import { IStock } from '../../../../../models/stock.models';
import * as Selectors from '../../../../store/stocks/selectors/stocks.selectors';

@Injectable()
export class FeatureStocksService {
  constructor(private store: Store) {}

  public getStocks(): void {
    this.store.dispatch(StocksActions.loadStocks());
  }

  public setStock(stock: IStock): void {
    this.store.dispatch(StocksActions.setStock({ stock }));
  }

  public selectStocks(): Signal<IStock[]> {
    return this.store.selectSignal(Selectors.selectStocks);
  }

  public selectStockByTicker(ticker: string): Signal<IStock | null> {
    return this.store.selectSignal(Selectors.selectStockByTicker(ticker));
  }
}
