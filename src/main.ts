import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setupWorker } from 'msw/browser';
import { mockHandlers } from './mocks';

setupWorker(...mockHandlers)
  .start({
    serviceWorker: {
      url: '/angular-level-2-certification/mockServiceWorker.js',
    },
  })
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));
