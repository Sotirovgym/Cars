import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/types/Car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: undefined | Car;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const carId = this.activeRoute.snapshot.paramMap.get('carId');

    if (carId) {
      this.apiService.getCar(carId).subscribe((car) => {
        this.car = car;
      });
    }
  }
}
