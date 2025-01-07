import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { StocksEffects } from './Stock/store/stocks/effects/stocks.effects';
import { provideState } from '@ngrx/store';
import { stocksReducer, STORE_KEY_STOCKS } from './Stock/store/stocks/reducers/stocks.reducers';
import {
  PAGE_CURRENCIES,
  PAGE_CURRENCIES_PARAM,
  PAGE_FAVORITES,
  PAGE_RECOMMENDATIONS,
  PAGE_STOCKS,
  PAGE_STOCKS_PARAM,
} from './constants/invest.constants';
import {
  currenciesReducer,
  STORE_KEY_CURRENCIES,
} from './Currency/store/currencies/reducers/currencies.reducers';
import { CurrenciesEffects } from './Currency/store/currencies/effects/currencies.effects';
import { DictionariesEffects } from './store/dictionaries/effects/dictionaries.effects';
import {
  dictionariesReducer,
  STORE_KEY_DICTIONARIES,
} from './store/dictionaries/reducers/dictionaries.reducers';
import { FeatureCurrenciesService } from './Currency/services/feature-currencies/feature-currencies.service';
import { FeatureStocksService } from './Stock/services/feature-stocks/feature-stocks.service';

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
    path: '',
    providers: [
      provideEffects(DictionariesEffects),
      provideState({ name: STORE_KEY_DICTIONARIES, reducer: dictionariesReducer }),
    ],
    loadComponent: () =>
      import('./components/page-wrapper/page-wrapper.component').then(
        (c) => c.PageWrapperComponent,
      ),
    children: [
      {
        path: PAGE_RECOMMENDATIONS,
        loadComponent: () =>
          import('./Recommendations/recommendations/recommendations.component').then(
            (c) => c.RecommendationsComponent,
          ),
      },
      {
        path: PAGE_FAVORITES,
        loadComponent: () =>
          import('./Favorites/favorites/favorites.component').then((c) => c.FavoritesComponent),
      },
      {
        path: PAGE_STOCKS,
        providers: [
          FeatureStocksService,
          provideEffects(StocksEffects),
          provideState({ name: STORE_KEY_STOCKS, reducer: stocksReducer }),
        ],
        loadComponent: () =>
          import('./Stock/pages/stock-wrapper/stock-wrapper.component').then(
            (c) => c.StockWrapperComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./Stock/pages/stocks/stocks.component').then((c) => c.StocksComponent),
          },
          {
            path: `:${PAGE_STOCKS_PARAM}`,
            loadComponent: () =>
              import('./Stock/pages/stock-detail/stock-detail.component').then(
                (c) => c.StockDetailComponent,
              ),
            children: [
              {
                path: '',
                loadComponent: () =>
                  import(
                    './Stock/pages/stock-detail/components/stock-review/stock-review.component'
                  ).then((c) => c.StockReviewComponent),
              },
              {
                path: 'pulse',
                loadComponent: () =>
                  import(
                    './Stock/pages/stock-detail/components/stock-pulse/stock-pulse.component'
                  ).then((c) => c.StockPulseComponent),
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
                  import(
                    './Stock/pages/stock-detail/components/stock-news/stock-news.component'
                  ).then((c) => c.StockNewsComponent),
              },
            ],
          },
        ],
      },
      {
        providers: [
          FeatureCurrenciesService,
          provideEffects(CurrenciesEffects),
          provideState({ name: STORE_KEY_CURRENCIES, reducer: currenciesReducer }),
        ],
        path: PAGE_CURRENCIES,
        loadComponent: () =>
          import('./Stock/pages/stock-wrapper/stock-wrapper.component').then(
            (c) => c.StockWrapperComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./Currency/pages/currencies/currencies.component').then(
                (c) => c.CurrenciesComponent,
              ),
          },
          {
            path: `:${PAGE_CURRENCIES_PARAM}`,
            loadComponent: () =>
              import('./Currency/pages/currency-detail/currency-detail.component').then(
                (c) => c.CurrencyDetailComponent,
              ),
            children: [
              {
                path: '',
                loadComponent: () =>
                  import(
                    './Currency/pages/currency-detail/components/currency-review/currency-review.component'
                  ).then((c) => c.CurrencyReviewComponent),
              },
              {
                path: 'pulse',
                loadComponent: () =>
                  import(
                    './Currency/pages/currency-detail/components/currency-pulse/currency-pulse.component'
                  ).then((c) => c.CurrencyPulseComponent),
              },
              {
                path: 'news',
                loadComponent: () =>
                  import(
                    './Currency/pages/currency-detail/components/currency-news/currency-news.component'
                  ).then((c) => c.CurrencyNewsComponent),
              },
            ],
          },
        ],
      },
    ],
  },
];
