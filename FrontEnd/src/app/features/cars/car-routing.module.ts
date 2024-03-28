import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarListComponent },
  { path: 'details/:carId', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CarRoutingModule {}
