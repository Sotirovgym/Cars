import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { username, password } = form.value;
    this.authService.login(username, password).subscribe(() => {
      this.notifyService.showSuccess('Successfully Logged In', 'Login');
      this.router.navigate(['/cars']);
    });
  }
}
