import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get username(): string {
    return this.authService.username;
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.notifyService.showSuccess('Successfully Logged Out', 'Logout');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => console.log(err),
    });
  }
}
