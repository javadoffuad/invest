import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStocksState, STORE_KEY_STOCKS } from '../reducers/stocks.reducers';

export const selectFeature = createFeatureSelector<IStocksState>(STORE_KEY_STOCKS);

export const selectStocks = createSelector(selectFeature, (state) => state.stocks);

export const selectStockByTicker = (ticker: string) =>
  createSelector(
    selectFeature,
    (state) => state.stocks.find((stock) => stock.shortName === ticker) ?? null,
  );
