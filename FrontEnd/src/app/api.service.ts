import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Car } from 'src/types/Car';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Car[]>(`${environment.apiUrl}/cars`);
  }
}
