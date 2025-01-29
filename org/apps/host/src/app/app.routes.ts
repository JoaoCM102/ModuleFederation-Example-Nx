
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { HomeComponent } from './components/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo:"/home",
    pathMatch: "full"
  },
  {
    path: 'app3',
    loadChildren: () =>
      loadRemote<typeof import('app3/Routes')>('app3/Routes').then(
        (m) => m!.remoteRoutes
      ).catch(
        
      ),
  },
  {
    path: 'app2',
    loadChildren: () =>
      loadRemote<typeof import('app2/Routes')>('app2/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'app1',
    loadChildren: () =>
      loadRemote<typeof import('app1/Routes')>('app1/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
