import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICurrency } from '../../../../models/currency.models';

export const CurrenciesActions = createActionGroup({
  source: 'Currencies',
  events: {
    'Load Currencies': emptyProps(),
    'Load Currencies Success': props<{ items: ICurrency[] }>(),
    'Load Currencies Failure': emptyProps(),

    'Select Currency': props<{ itemId: ICurrency['id'] }>(),
    'Set Currency': props<{ item: ICurrency }>(),
  },
});
