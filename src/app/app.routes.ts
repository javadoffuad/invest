import { Routes } from '@angular/router';
import { investRoutes } from './Invest/invest.routes';

/**
 * /
 * invest
 * login
 */

export const routes: Routes = [
  ...investRoutes,
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
