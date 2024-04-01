import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/types/Car';
import { CarService } from '../car.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: undefined | Car;

  constructor(
    private activeRoute: ActivatedRoute,
    private carService: CarService,
    private authService: AuthService,
    private notifyService: NotificationService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    const carId = this.activeRoute.snapshot.paramMap.get('carId');

    if (carId) {
      this.carService.getCarById(carId).subscribe((car) => {
        this.car = car;
      });
    }
  }

  deleteCar(){
    this.carService.delete(this.car?._id!).subscribe({
      next: () => {
        this.notifyService.showSuccess('Post was successfully deleted', '');
        this.router.navigate(['/cars']);
      },
      error: (res) => {
        this.notifyService.showError(res.error.message, '');
      }
    })
  }
}
