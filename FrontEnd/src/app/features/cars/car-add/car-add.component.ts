import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Car } from 'src/types/Car';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  carId: string = '';
  isAddMode: boolean = true;

  public validationMessages = {
    title: {
      required: 'Title is required',
      minlength: 'Title must be at least 5 characters',
    },
    brand: {
      required: 'Brand is required',
      minlength: 'Brand must be at least 3 characters',
    },
    model: {
      required: 'Model is required',
      minlength: 'Model must be at least 2 characters',
    },
    year: {
      required: 'Year is required',
      min: 'Year should be greater than 1900',
    },
    mileage: {
      required: 'Mileage is required',
      min: 'Mileage should be greater than 0',
    },
    engine: {
      required: 'Engine is required',
    },
    region: {
      required: 'Region is required',
    },
    image: {
      required: 'Image is required',
      pattern: 'Invalid image address',
    },
    price: {
      required: 'Price is required',
      min: 'Price should be greater than 0',
    },
    description: {
      required: 'Description is required',
      minlength: 'Description must be at least 10 characters',
    },
  };

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  get title() {
    return this.form.get('title') as FormControl;
  }

  get brand() {
    return this.form.get('brand') as FormControl;
  }

  get model() {
    return this.form.get('model') as FormControl;
  }

  get year() {
    return this.form.get('year') as FormControl;
  }

  get mileage() {
    return this.form.get('mileage') as FormControl;
  }

  get engine() {
    return this.form.get('engine') as FormControl;
  }

  get region() {
    return this.form.get('region') as FormControl;
  }

  get image() {
    return this.form.get('image') as FormControl;
  }

  get price() {
    return this.form.get('price') as FormControl;
  }

  get description() {
    return this.form.get('description') as FormControl;
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['carId'];
    this.isAddMode = !this.carId;
    this.createform();

    if (!this.isAddMode) {
      this.carService.getCarById(this.carId).subscribe(x => this.form.patchValue(x));
    }
  }

  createform() {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      brand: [null, [Validators.required, Validators.minLength(3)]],
      model: [null, [Validators.required, Validators.minLength(2)]],
      year: [null, [Validators.required, Validators.min(1900)]],
      mileage: [null, [Validators.required, Validators.min(0)]],
      engine: [null, [Validators.required]],
      region: [null, [Validators.required]],
      image: [null, [Validators.required, Validators.pattern(/^https?:\/\//)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      price: [null, [Validators.required, Validators.min(0)]],
    });
  }

  createCar(){
    const car = this.form.value as Car;

    this.carService.create(car).subscribe({
      next: () => {
        this.notifyService.showSuccess('Post was successfully created', '');
        this.router.navigate(['/cars']);
      },
      error: (res: HttpErrorResponse) => {
        this.notifyService.showError(res.error.message, '');
      },
    });
  }

  updateCar(){
    const car = this.form.value as Car;

    this.carService.update(this.carId, car).subscribe({
      next: () => {
        this.notifyService.showSuccess('Post was successfully updated', '');
        this.router.navigate([`/cars/details/${this.carId}`]);
      },
      error: (res: HttpErrorResponse) => {
        this.notifyService.showError(res.error.message, '');
      },
    });
  }

  onSubmit() {
    if (this.isAddMode) {
      this.createCar();
    } else{
      this.updateCar();
    }
  }
}
