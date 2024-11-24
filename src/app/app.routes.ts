import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Stock/pages/stocks/stocks.component').then(c => c.StocksComponent)
  },
  {
    path: 'stocks/:name',
    loadComponent: () =>
      import('./Stock/pages/stock-detail/stock-detail.component').then(c => c.StockDetailComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./Login/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./Layouts/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
  },
];
