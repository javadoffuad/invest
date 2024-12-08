import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { StocksEffects } from './Stock/store/stocks/effects/stocks.effects';
import { provideState } from '@ngrx/store';
import { stocksReducer, STORE_KEY_STOCKS } from './Stock/store/stocks/reducers/stocks.reducers';
import {
  matchPageCurrencies,
  matchPageFavorites,
  matchPageInvest,
  matchPageRecommendations,
  matchPageStocks,
} from './utils/routes.utils';

/**
 * recommendations
 * stocks
 * currencies
 * favorites
 * stock-detail:name
 *    review
 *    pulse
 *    dividends
 *    news
 */

export const investRoutes: Routes = [
  {
    matcher: matchPageInvest,
    loadComponent: () =>
      import('./components/page-wrapper/page-wrapper.component').then(
        (c) => c.PageWrapperComponent,
      ),
    children: [
      {
        matcher: matchPageRecommendations,
        loadComponent: () =>
          import('./Recommendations/recommendations/recommendations.component').then(
            (c) => c.RecommendationsComponent,
          ),
      },
      {
        matcher: matchPageStocks,
        providers: [
          provideEffects(StocksEffects),
          provideState({ name: STORE_KEY_STOCKS, reducer: stocksReducer }),
        ],
        loadComponent: () =>
          import('./Stock/pages/stocks/stocks.component').then((c) => c.StocksComponent),
      },
      {
        matcher: matchPageCurrencies,
        loadComponent: () =>
          import('./Currencies/currencies/currencies.component').then((c) => c.CurrenciesComponent),
      },
      {
        matcher: matchPageFavorites,
        loadComponent: () =>
          import('./Favorites/favorites/favorites.component').then((c) => c.FavoritesComponent),
      },
    ],
  },
  {
    path: 'stocks/:name',
    loadComponent: () =>
      import('./Stock/pages/stock-detail/stock-detail.component').then(
        (c) => c.StockDetailComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Stock/pages/stock-detail/components/stock-review/stock-review.component').then(
            (c) => c.StockReviewComponent,
          ),
      },
      {
        path: 'pulse',
        loadComponent: () =>
          import('./Stock/pages/stock-detail/components/stock-pulse/stock-pulse.component').then(
            (c) => c.StockPulseComponent,
          ),
      },
      {
        path: 'dividends',
        loadComponent: () =>
          import(
            './Stock/pages/stock-detail/components/stock-dividends/stock-dividends.component'
          ).then((c) => c.StockDividendsComponent),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./Stock/pages/stock-detail/components/stock-news/stock-news.component').then(
            (c) => c.StockNewsComponent,
          ),
      },
    ],
  },
];
