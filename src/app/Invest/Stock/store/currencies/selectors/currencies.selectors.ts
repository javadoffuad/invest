import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICurrenciesState, STORE_KEY_CURRENCIES } from '../reducers/currencies.reducers';

export const selectFeature = createFeatureSelector<ICurrenciesState>(STORE_KEY_CURRENCIES);

export const selectCurrencies = createSelector(selectFeature, (state) => state.currencies);
