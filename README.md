# MyDreamApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Links
Angular.io (https://angular.io)
Angular update (https://update.angular.io)
Firebase (https://firebase.google.com) (https://mydreamapp-e2f96.firebaseapp.com/)
Angular Material (https://material.angular.io/) (tab, Table, layout, ...)
- ng add @angular/material
- ng generate @angular/material:material-nav --name=my-nav (se positionner dans le rep shared)

Le service Renderer2 et les directives

Web component (https://www.webcomponents.org/element/GoogleWebComponents/google-youtube)


Transclusion or content projection
- Designs pattern
- Multi-Transclude

Bundle
ng build --stats-json

ng build --prod --stats-json

"bundleAnalyzer": "webpack-bundle-analyzer ./dist/my-dream-app/stats.json"
(https://www.npmjs.com/package/webpack-bundle-analyzer)


ROUTING
RouterModule from @angular/Router

Routing après création des components

Lazy Loading:
Exp pour Home: 
1- Créer route app-routing.module.ts 
{path: 'home', loadChildren: './home/home.module#HomeModule'}
2- Supprimer les import de HomeModule dans la app.module.ts
3- Redéfinir les routes dans le router de HomeModule home-routing.module.ts
{path: '**', component: HomeComponent}

PRELOADING STRATEGY
Charge les modules qd c'est possible.

OBSERVABLE
Stackblitz (https://stackblitz.com/) Excellent pour prototyper
https://stackblitz.com/edit/angular-vbjjkw?file=src%2Fapp%2Fbienvenue.component.ts

Observable au lieu de promess

http://reactivex.io/
https://github.com/ReactiveX/rxjs
API: https://rxjs-dev.firebaseapp.com/api
Operateurs: debounceTime; distinctUntilChanged; map; filter; switchMap; forkJoin; tap;

Pour simuler une API :
https://jsonplaceholder.typicode.com/


APPLICATION EN PRODUCTION
- https://www.commitstrip.com/fr/
- API: https://www.themoviedb.org/
- https://www.formation-nativo.com/home

Wappalyzer:  https://wappalyzer.com/


Formulaire pilote par le template


Cloud Firebase
HA129Scv0VpYUIetfWFC
npm install firebase angularfire2
