import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProfileInfo } from 'src/types/ProfileInfo';
import { NotificationService } from 'src/app/core/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/types/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  isEditMode: boolean = false;

  public validationMessages = {
    username: {
      required: 'Username is required',
      minlength: 'Username must be at least 5 characters',
    },
    email: {
      required: 'Email is required',
      email: 'Invalid email',
    },
  };

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private userService: UserService,
    private notifyService: NotificationService
  ) {}

  get username() {
    return this.form.get('username') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get tel() {
    return this.form.get('tel') as FormControl;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      tel: [null],
    });
  }

  fillProfileInfo(): void {
    const profileInfo: ProfileInfo = {
      username: this.authService.user.username,
      email: this.authService.user.email,
      tel: this.authService.user.tel,
    };

    this.form.setValue(profileInfo);
    this.onToggle();
  }

  updateProfileInfo(): void {
    const profileInfo = this.form.value as ProfileInfo;

    this.userService.updateProfileInfo(profileInfo).subscribe({
      next: (updatedUser) => {
        const user: User = JSON.parse(localStorage.getItem('user') || '');
        user.username = updatedUser.username;
        user.email = updatedUser.email;
        user.tel = updatedUser.tel;
        user.updatedAt = updatedUser.updatedAt;
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(user));
        this.notifyService.showSuccess('User information was successfully updated', '');
        this.onToggle();
      },
      error: (res: HttpErrorResponse) => {
        this.notifyService.showError(res.error.message, '');
      }
    });
  }

  onToggle(): void {
    this.isEditMode = !this.isEditMode;
  }

  onSubmit(): void {}
}
