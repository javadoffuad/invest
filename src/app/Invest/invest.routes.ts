import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { StocksEffects } from './Stock/store/stocks/effects/stocks.effects';
import { provideState } from '@ngrx/store';
import { stocksReducer, STORE_KEY_STOCKS } from './Stock/store/stocks/reducers/stocks.reducers';
import { matchInvestPage, matchInvestSubPage } from './utils/routes.utils';
import {
  PAGE_CURRENCIES,
  PAGE_FAVORITES,
  PAGE_RECOMMENDATIONS,
  PAGE_STOCKS,
} from './constants/invest.constants';
import {
  currenciesReducer,
  STORE_KEY_CURRENCIES,
} from './Stock/store/currencies/reducers/currencies.reducers';
import { CurrenciesEffects } from './Stock/store/currencies/effects/currencies.effects';

/**
 * recommendations
 * stocks
 * currencies
 * favorites
 * stock-detail:ticker
 *    review
 *    pulse
 *    dividends
 *    news
 */

export const investRoutes: Routes = [
  {
    matcher: matchInvestPage,
    loadComponent: () =>
      import('./components/page-wrapper/page-wrapper.component').then(
        (c) => c.PageWrapperComponent,
      ),
    children: [
      {
        matcher: (url, segment) => matchInvestSubPage(url, segment, PAGE_RECOMMENDATIONS),
        loadComponent: () =>
          import('./Recommendations/recommendations/recommendations.component').then(
            (c) => c.RecommendationsComponent,
          ),
      },
      {
        matcher: (url, segment) => matchInvestSubPage(url, segment, PAGE_STOCKS),
        providers: [
          provideEffects(StocksEffects),
          provideState({ name: STORE_KEY_STOCKS, reducer: stocksReducer }),
        ],
        loadComponent: () =>
          import('./Stock/pages/stocks/stocks.component').then((c) => c.StocksComponent),
      },
      {
        providers: [
          provideEffects(CurrenciesEffects),
          provideState({ name: STORE_KEY_CURRENCIES, reducer: currenciesReducer }),
        ],
        matcher: (url, segment) => matchInvestSubPage(url, segment, PAGE_CURRENCIES),
        loadComponent: () =>
          import('./currencies/currencies/currencies.component').then((c) => c.CurrenciesComponent),
      },
      {
        matcher: (url, segment) => matchInvestSubPage(url, segment, PAGE_FAVORITES),
        loadComponent: () =>
          import('./Favorites/favorites/favorites.component').then((c) => c.FavoritesComponent),
      },
    ],
  },
  {
    path: `${PAGE_STOCKS}/:ticker`,
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
  {
    path: `${PAGE_CURRENCIES}/:ticker`,
    loadComponent: () =>
      import('./currency-detail/currency-detail.component').then((c) => c.CurrencyDetailComponent),
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
        path: 'news',
        loadComponent: () =>
          import('./Stock/pages/stock-detail/components/stock-news/stock-news.component').then(
            (c) => c.StockNewsComponent,
          ),
      },
    ],
  },
];
