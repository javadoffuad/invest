import { createReducer, on } from '@ngrx/store';
import { CurrenciesActions } from '../actions/currencies.actions';
import { ICurrency } from '../../../../models/currency.models';

export interface ICurrenciesState {
  currencies: ICurrency[];
  activeCurrencyId: ICurrency['id'] | null;
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
  on(CurrenciesActions.setCurrency, (state, { item }) => {
    const newCurrencies = [...state.currencies];
    newCurrencies.splice(newCurrencies.indexOf(item), 1, item);

    return {
      ...state,
      currencies: newCurrencies,
    };
  }),
);
