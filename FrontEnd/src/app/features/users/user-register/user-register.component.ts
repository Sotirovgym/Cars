import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) {}

  register(form: NgForm) {
    const { username, email, password, tel } = form.value;
    this.authService.register(username, email, password, tel).subscribe(() => {
      this.notifyService.showSuccess('Successfully Registered', 'Register');
      this.router.navigate(['/cars']);
    });
  }
}
