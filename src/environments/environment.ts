// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCP6e3Za00f0yMJx20mbnqUxAoi3QMoXxc',
    authDomain: 'workshops-6e01c.firebaseapp.com',
    databaseURL: 'https://workshops-6e01c.firebaseio.com',
    projectId: 'workshops-6e01c',
    storageBucket: 'workshops-6e01c.appspot.com',
    messagingSenderId: '1009885829801'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
