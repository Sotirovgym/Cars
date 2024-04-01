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

  getCarById(id: string) {
    return this.http.get<Car>(`/api/cars/${id}`);
  }

  create(carData: Car) {
    return this.http.post<Car>(`/api/cars`, carData);
  }

  update(id:string, carData: Car) {
    return this.http.put<Car>(`/api/cars/${id}`, carData);
  }

  delete(id:string) {
    return this.http.delete<Car>(`/api/cars/${id}`);
  }
}
