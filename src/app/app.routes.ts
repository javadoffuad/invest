import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { StocksEffects } from './Invest/Stock/store/stocks/effects/stocks.effects';
import { provideState } from '@ngrx/store';
import {
  stocksReducer,
  STORE_KEY_STOCKS,
} from './Invest/Stock/store/stocks/reducers/stocks.reducers';

/**
 * /
 * recommendations
 * stocks
 * currencies
 * favorites
 * stock-detail:name
 *    review
 *    pulse
 *    dividends
 *    news
 * education
 * account
 * login
 */

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Home/home/home.component').then((c) => c.HomeComponent),
  },
  {
    matcher: (url) => {
      if (
        url.length === 1 &&
        (url[0].path === 'recommendations' ||
          url[0].path === 'stocks' ||
          url[0].path === 'currencies' ||
          url[0].path === 'favorites')
      ) {
        return { consumed: url };
      }
      return null;
    },
    loadComponent: () =>
      import('./Invest/components/page-wrapper/page-wrapper.component').then(
        (c) => c.PageWrapperComponent,
      ),
    children: [
      {
        matcher: (url, segmentGroup, route) => {
          if (
            segmentGroup.segments.length === 1 &&
            segmentGroup.segments[0].path === 'recommendations'
          ) {
            return { consumed: url };
          }
          return null;
        },
        pathMatch: 'prefix',
        loadComponent: () =>
          import('./Invest/Recommendations/recommendations/recommendations.component').then(
            (c) => c.RecommendationsComponent,
          ),
      },
      {
        matcher: (url, segmentGroup, route) => {
          if (segmentGroup.segments.length === 1 && segmentGroup.segments[0].path === 'stocks') {
            return { consumed: url };
          }
          return null;
        },
        providers: [
          provideEffects(StocksEffects),
          provideState({ name: STORE_KEY_STOCKS, reducer: stocksReducer }),
        ],
        loadComponent: () =>
          import('./Invest/Stock/pages/stocks/stocks.component').then((c) => c.StocksComponent),
      },
      {
        matcher: (url, segmentGroup, route) => {
          if (
            segmentGroup.segments.length === 1 &&
            segmentGroup.segments[0].path === 'currencies'
          ) {
            return { consumed: url };
          }
          return null;
        },
        loadComponent: () =>
          import('./Invest/Currencies/currencies/currencies.component').then(
            (c) => c.CurrenciesComponent,
          ),
      },
      {
        matcher: (url, segmentGroup, route) => {
          if (segmentGroup.segments.length === 1 && segmentGroup.segments[0].path === 'favorites') {
            return { consumed: url };
          }
          return null;
        },
        loadComponent: () =>
          import('./Invest/Favorites/favorites/favorites.component').then(
            (c) => c.FavoritesComponent,
          ),
      },
    ],
  },
  {
    path: 'stocks/:name',
    loadComponent: () =>
      import('./Invest/Stock/pages/stock-detail/stock-detail.component').then(
        (c) => c.StockDetailComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './Invest/Stock/pages/stock-detail/components/stock-review/stock-review.component'
          ).then((c) => c.StockReviewComponent),
      },
      {
        path: 'pulse',
        loadComponent: () =>
          import(
            './Invest/Stock/pages/stock-detail/components/stock-pulse/stock-pulse.component'
          ).then((c) => c.StockPulseComponent),
      },
      {
        path: 'dividends',
        loadComponent: () =>
          import(
            './Invest/Stock/pages/stock-detail/components/stock-dividends/stock-dividends.component'
          ).then((c) => c.StockDividendsComponent),
      },
      {
        path: 'news',
        loadComponent: () =>
          import(
            './Invest/Stock/pages/stock-detail/components/stock-news/stock-news.component'
          ).then((c) => c.StockNewsComponent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./Login/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Layouts/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent,
      ),
  },
];
