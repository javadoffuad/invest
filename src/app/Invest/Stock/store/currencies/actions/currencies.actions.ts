import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IStock } from '../../../../models/stock.models';

export const CurrenciesActions = createActionGroup({
  source: 'Currencies',
  events: {
    'Load Currencies': emptyProps(),
    'Load Currencies Success': props<{ items: IStock[] }>(),
    'Load Currencies Failure': emptyProps(),

    'Select Currency': props<{ itemId: IStock['id'] }>(),
  },
});
