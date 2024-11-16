import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(localeRu)

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
        NG_EVENT_PLUGINS
    ]
};
