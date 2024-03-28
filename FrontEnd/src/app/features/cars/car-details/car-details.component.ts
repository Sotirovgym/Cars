import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/types/Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: undefined | Car;

  constructor(
    private activeRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const carId = this.activeRoute.snapshot.paramMap.get('carId');

    if (carId) {
      this.carService.getCar(carId).subscribe((car) => {
        this.car = car;
      });
    }
  }
}
