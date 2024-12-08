import { createActionGroup, emptyProps, props} from '@ngrx/store';
import {IStock} from '../../../models/stock.models';

export const StocksActions = createActionGroup({
  source: 'Stocks',
  events: {
    'Load Stocks': emptyProps(),
    'Load Stocks Success': props<{ stocks: IStock[] }>(),
    'Load Stocks Failure': emptyProps(),

    'Select Stock': props<{ stockId: IStock['id'] }>(),
  }
});
