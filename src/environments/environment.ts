// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBgHxDchXioOblMjthNmgiQmq0Zb1J-8VY',
    authDomain: 'mydreamapp-e2f96.firebaseapp.com',
    databaseURL: 'https://mydreamapp-e2f96.firebaseio.com',
    projectId: 'mydreamapp-e2f96',
    storageBucket: 'mydreamapp-e2f96.appspot.com',
    messagingSenderId: '240066362243'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
