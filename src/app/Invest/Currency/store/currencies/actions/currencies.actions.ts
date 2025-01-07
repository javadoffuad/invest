import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICurrency } from '../../../../models/currency.models';
import { IStock } from '../../../../models/stock.models';

export const CurrenciesActions = createActionGroup({
  source: 'Currencies',
  events: {
    'Load Currencies': emptyProps(),
    'Load Currencies Success': props<{ items: ICurrency[] }>(),
    'Load Currencies Failure': emptyProps(),

    'Load Currency By Ticker': props<{ ticker: ICurrency['ticker'] }>(),
    'Load Currency By Ticker Success': props<{ item: ICurrency }>(),
    'Load Currency By Ticker Failure': emptyProps(),

    'Select Currency': props<{ itemId: ICurrency['id'] }>(),
    'Set Currency': props<{ item: ICurrency }>(),
  },
});
