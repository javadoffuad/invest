import { createReducer, on } from '@ngrx/store';
import { DictionariesActions } from '../actions/dictionaries.actions';
import { ICountry } from '../../../models/country.models';

export interface IDictionariesState {
  countries: ICountry[];
  isLoadingCountries: boolean;
}

export const initialState: IDictionariesState = {
  countries: [],
  isLoadingCountries: false,
};

export const STORE_KEY_DICTIONARIES = 'dictionaries';

export const dictionariesReducer = createReducer(
  initialState,
  on(DictionariesActions.loadCountries, (state) => ({
    ...state,
    isLoadingCountries: true,
  })),
  on(DictionariesActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    isLoadingCountries: false,
  })),
  on(DictionariesActions.loadCountriesSuccess, (state) => ({
    ...state,
    isLoadingCountries: false,
  })),
);
