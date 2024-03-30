import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { confirmPasswordValidator } from 'src/app/shared/validators/confirm-password.validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup = {} as FormGroup;

  public validationMessages = {
    username: {
      required: 'Username is required',
      minlength: 'Username must be at least 5 characters'
    },
    email: {
      required: 'Email is required',
      email: 'Invalid email'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 5 characters'
    },
    rePassword: {
      required: 'Confirm password is required',
      confirmpassworderror: 'Password doesn\'t match'
    },
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  get username (){
    return this.registerForm.get('username') as FormControl;
  }

  get email (){
    return this.registerForm.get('email') as FormControl;
  }

  get password (){
    return this.registerForm.get('password') as FormControl;
  }

  get rePassword (){
    return this.registerForm.get('rePassword') as FormControl;
  }

  get mobile (){
    return this.registerForm.get('mobile') as FormControl;
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm(){
    this.registerForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      rePassword: [null, [Validators.required]],
      mobile: [null],
    },
    {validators: confirmPasswordValidator} as AbstractControlOptions
    )
  }

  register() {
    this.authService.register(this.username.value, this.email.value, this.password.value, this.mobile.value).subscribe({
      next: () => {
        this.notifyService.showSuccess('Successfully Registered', 'Register');
        this.router.navigate(['/cars']);
      },
      error: (errRes: HttpErrorResponse) => {
        this.notifyService.showError(errRes.error.message, '');
      }
    });
  }
}
