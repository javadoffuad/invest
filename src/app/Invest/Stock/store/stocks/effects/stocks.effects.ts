import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StocksActions } from '../actions/stocks.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { StocksService } from '../../../../services/stocks/stocks.service';

@Injectable()
export class StocksEffects {
  private actions$ = inject(Actions);

  loadStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StocksActions.loadStocks),
      exhaustMap(() =>
        this.stocksService.getStocks().pipe(
          map((stocks) => StocksActions.loadStocksSuccess({ stocks })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private stocksService: StocksService) {}
}
