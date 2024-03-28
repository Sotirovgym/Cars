import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/types/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Car[]>(`/api/cars`);
  }

  getCar(id: string) {
    return this.http.get<Car>(`/api/cars/${id}`);
  }
}
