import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { CarCardComponent } from './car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { CarRoutingModule } from './car-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    CarListComponent,
    CarCardComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarRoutingModule
  ]
})
export class CarsModule { }
