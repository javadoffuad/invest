import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Stock/pages/stocks/stocks.component').then(
        (c) => c.StocksComponent,
      ),
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
        loadComponent: () => import('./Stock/pages/stock-detail/components/stock-review/stock-review.component').then(c => c.StockReviewComponent)
      },
      {
        path: 'pulse',
        loadComponent: () => import('./Stock/pages/stock-detail/components/stock-pulse/stock-pulse.component').then(
          (c) => c.StockPulseComponent,
        ),
      },
      {
        path: 'dividends',
        loadComponent: () => import('./Stock/pages/stock-detail/components/stock-dividends/stock-dividends.component').then(
          (c) => c.StockDividendsComponent,
        ),
      },
      {
        path: 'news',
        loadComponent: () => import('./Stock/pages/stock-detail/components/stock-news/stock-news.component').then(
          (c) => c.StockNewsComponent,
        ),
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Login/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Layouts/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent,
      ),
  },
];
