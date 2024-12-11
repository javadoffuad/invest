import { Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrenciesActions } from '../../../../store/currencies/actions/currencies.actions';
import { IStock } from '../../../../../models/stock.models';
import * as Selectors from '../../../../store/currencies/selectors/currencies.selectors';

@Injectable()
export class FeatureCurrenciesService {
  constructor(private store: Store) {}

  public getCurrencies(): void {
    this.store.dispatch(CurrenciesActions.loadCurrencies());
  }

  public selectCurrencies(): Signal<IStock[]> {
    return this.store.selectSignal(Selectors.selectCurrencies);
  }
}
