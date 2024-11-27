import {IStock} from '../../../models/stock.models';
import { createReducer, on} from '@ngrx/store';
import * as StocksActions from '../actions/stocks.actions';

interface IStocksState {
  stocks: IStock[];
  selectedStockId: IStock['id'] | null;
}

export const initialState: IStocksState = {
  stocks: [],
  selectedStockId: null,
};

export const STORE_KEY_STOCKS = 'stocks';

export const stocksReducer = createReducer(
  initialState,
  on(StocksActions.loadStocks, state => ({
    ...state,
  })),
  on(StocksActions.selectStock, (state, action) => ({
    ...state,
    selectedStockId: action.stockId,
  })),
);
