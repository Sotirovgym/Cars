import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { CarAddComponent } from './car-add/car-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarListComponent },
  { path: 'details/:carId', component: CarDetailsComponent },
  {
    path: 'create',
    component: CarAddComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit/:carId',
    component: CarAddComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CarRoutingModule {}
