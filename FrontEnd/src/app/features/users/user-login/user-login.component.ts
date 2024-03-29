import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LetterAndDigitValidator } from 'src/app/shared/validators/lettersAndDigitsValidator';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  registerForm: FormGroup = {} as FormGroup;

  public validationMessages = {
    username: {
      required: 'Username is required',
      minlength: 'Username must be at least 5 characters'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 5 characters'
    }
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

  get password (){
    return this.registerForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm(){
    this.registerForm = this.fb.group(
      {
        username: [null, [Validators.required, Validators.minLength(5)]],
        password: [null, [Validators.required, Validators.minLength(5)]],
      }
    );
  }

  login() {
    this.authService.login(this.username.value, this.password.value).subscribe({
      next: () => {
        this.registerForm.reset();
        this.notifyService.showSuccess('Successfully Logged In', 'Login');
        this.router.navigate(['/cars']);
      },
      error: (errRes: HttpErrorResponse) => {
        this.notifyService.showError(errRes.error.message, '');
      }
    });
  }
}
