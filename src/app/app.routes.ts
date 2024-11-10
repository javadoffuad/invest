import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Stock/stocks/stocks.component').then(c => c.StocksComponent)
  },
  {
    path: 'stocks/:name',
    loadComponent: () =>
      import('./Stock/stock-detail/stock-detail.component').then(c => c.StockDetailComponent),
  }
];
