import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DictionariesActions } from '../actions/dictionaries.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { CountriesService } from '../../../services/countires/countries.service';

@Injectable()
export class DictionariesEffects {
  private actions$ = inject(Actions);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DictionariesActions.loadCountries),
      exhaustMap(() =>
        this.countriesService.getItems().pipe(
          map((countries) => DictionariesActions.loadCountriesSuccess({ countries })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private countriesService: CountriesService) {}
}
