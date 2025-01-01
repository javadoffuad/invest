import { Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { DictionariesActions } from '../../store/dictionaries/actions/dictionaries.actions';
import * as Selectors from '../../store/dictionaries/selectors/dictionaries.selectors';
import { ICountry } from '../../models/country.models';

@Injectable()
export class FeatureCountriesService {
  constructor(private store: Store) {}

  public getCountries(): void {
    this.store.dispatch(DictionariesActions.loadCountries());
  }

  public selectCountries(): Signal<ICountry[]> {
    return this.store.selectSignal(Selectors.selectCountries);
  }
}
