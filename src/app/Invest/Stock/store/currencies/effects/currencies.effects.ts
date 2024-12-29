import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrenciesActions } from '../actions/currencies.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { CurrenciesService } from '../../../../services/currencies/currencies.service';

@Injectable()
export class CurrenciesEffects {
  private actions$ = inject(Actions);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.loadCurrencies),
      exhaustMap(() =>
        this.currenciesService.getItems().pipe(
          map((items) => CurrenciesActions.loadCurrenciesSuccess({ items })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private currenciesService: CurrenciesService) {}
}
