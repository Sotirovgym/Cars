import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { CarCardComponent } from './car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { CarRoutingModule } from './car-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarAddComponent } from './car-add/car-add.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CarListComponent,
        CarCardComponent,
        CarDetailsComponent,
        CarAddComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CarRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class CarsModule { }
