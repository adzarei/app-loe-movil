import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

enableProdMode();
// For the cordova wrapper: we need to wait Cordova to load completely:
// let onDeviceReady = () => {
//   platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
// };
// document.addEventListener('deviceready', onDeviceReady, false);


// For normal execution.
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
