import {IStock} from '../../../models/stock.models';
import { createReducer, on} from '@ngrx/store';
import {StocksActions} from '../actions/stocks.actions';

export interface IStocksState {
  stocks: IStock[];
  activeStockId: IStock['id'] | null;
  isLoadingStocks: boolean;
}

export const initialState: IStocksState = {
  stocks: [],
  activeStockId: null,
  isLoadingStocks: false,
};

export const STORE_KEY_STOCKS = 'stocks';

export const stocksReducer = createReducer(
  initialState,
  on(StocksActions.loadStocks, state => ({
    ...state,
    isLoadingStocks: true,
  })),
  on(StocksActions.loadStocksSuccess, (state, {stocks}) => ({
    ...state,
    stocks,
    isLoadingStocks: false,
  })),
  on(StocksActions.loadStocksSuccess, state => ({
    ...state,
    isLoadingStocks: false,
  })),
  on(StocksActions.selectStock, (state, action) => ({
    ...state,
    activeStockId: action.stockId,
  })),
);
