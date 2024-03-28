import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'cars',
    loadChildren: () => import('./features/cars/cars.module').then((m) => m.CarsModule),
  },
  // { path: 'error', component: ErrorComponent },
  // { path: '**', redirectTo: '/404' },
  // { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
