import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDictionariesState, STORE_KEY_DICTIONARIES } from '../reducers/dictionaries.reducers';

const selectFeature = createFeatureSelector<IDictionariesState>(STORE_KEY_DICTIONARIES);

export const selectCountries = createSelector(selectFeature, (state) => state.countries);
