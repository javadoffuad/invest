import { createAction, props } from '@ngrx/store';
import {IStock} from '../../../models/stock.models';

export const loadStocks = createAction(
  '[Stocks Page] load stocks',
  props<{ stocks: IStock[] }>()
);
export const selectStock = createAction(
  '[Stocks Page] load stocks',
  props<{ stockId: IStock['id'] }>()
);
