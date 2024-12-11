import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrenciesActions } from '../actions/currencies.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { StocksService } from '../../../services/stocks/stocks.service';

@Injectable()
export class CurrenciesEffects {
  private actions$ = inject(Actions);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.loadCurrencies),
      exhaustMap(() =>
        this.stocksService.getStocks().pipe(
          map((items) => CurrenciesActions.loadCurrenciesSuccess({ items })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private stocksService: StocksService) {}
}
