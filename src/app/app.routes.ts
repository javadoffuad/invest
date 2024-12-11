import { Routes } from '@angular/router';
import { investRoutes } from './Invest/invest.routes';

/**
 * /
 * invest routes
 * education
 * account
 * login
 */

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Home/home/home.component').then((c) => c.HomeComponent),
  },
  ...investRoutes,
  {
    path: 'login',
    loadComponent: () => import('./Login/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./Education/education/education.component').then((c) => c.EducationComponent),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./Account/account/account.component').then((c) => c.AccountComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Layouts/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent,
      ),
  },
];
