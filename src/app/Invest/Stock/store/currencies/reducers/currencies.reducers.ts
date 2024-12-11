import { IStock } from '../../../../models/stock.models';
import { createReducer, on } from '@ngrx/store';
import { CurrenciesActions } from '../actions/currencies.actions';

export interface ICurrenciesState {
  currencies: IStock[];
  activeCurrencyId: IStock['id'] | null;
  isLoadingCurrencies: boolean;
}

export const initialState: ICurrenciesState = {
  currencies: [],
  activeCurrencyId: null,
  isLoadingCurrencies: false,
};

export const STORE_KEY_CURRENCIES = 'currencies';

export const currenciesReducer = createReducer(
  initialState,
  on(CurrenciesActions.loadCurrencies, (state) => ({
    ...state,
    isLoadingCurrencies: true,
  })),
  on(CurrenciesActions.loadCurrenciesSuccess, (state, { items }) => ({
    ...state,
    currencies: items,
    isLoadingCurrencies: false,
  })),
  on(CurrenciesActions.loadCurrenciesSuccess, (state) => ({
    ...state,
    isLoadingCurrencies: false,
  })),
  on(CurrenciesActions.selectCurrency, (state, action) => ({
    ...state,
    activeCurrencyId: action.itemId,
  })),
);
