// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA5-7lgNKsDPiUm22pVJjkDkzfCuQDaMmw",
    authDomain: "sanoop-website.firebaseapp.com",
    databaseURL: "https://sanoop-website.firebaseio.com",
    projectId: "sanoop-website",
    storageBucket: "sanoop-website.appspot.com",
    messagingSenderId: "244992244090"
  }
};