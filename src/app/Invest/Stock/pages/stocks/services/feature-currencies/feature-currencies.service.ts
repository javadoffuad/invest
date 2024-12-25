import { Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrenciesActions } from '../../../../store/currencies/actions/currencies.actions';
import * as Selectors from '../../../../store/currencies/selectors/currencies.selectors';
import { ICurrency } from '../../../../../models/currency.models';

@Injectable()
export class FeatureCurrenciesService {
  constructor(private store: Store) {}

  public getCurrencies(): void {
    this.store.dispatch(CurrenciesActions.loadCurrencies());
  }

  public setCurrency(currency: ICurrency): void {
    this.store.dispatch(CurrenciesActions.setCurrency({ item: currency }));
  }

  public selectCurrencies(): Signal<ICurrency[]> {
    return this.store.selectSignal(Selectors.selectCurrencies);
  }
}
