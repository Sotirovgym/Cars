import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/types/Car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }
}
