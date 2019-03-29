// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC4ABQzf3BbmVd_3BiTBxAsK79yCoS9HYo',
    authDomain: 'portal-meat.firebaseapp.com',
    databaseURL: 'https://portal-meat.firebaseio.com',
    projectId: 'portal-meat',
    storageBucket: 'portal-meat.appspot.com',
    messagingSenderId: '948231536669'
  }
};
