import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICountry } from '../../../models/country.models';

export const DictionariesActions = createActionGroup({
  source: 'Dictionaries',
  events: {
    'Load Countries': emptyProps(),
    'Load Countries Success': props<{ countries: ICountry[] }>(),
    'Load Countries Failure': emptyProps(),
  },
});
