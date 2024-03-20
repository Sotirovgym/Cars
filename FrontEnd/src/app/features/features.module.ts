import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    CarsModule
  ]
})
export class FeaturesModule { }
