import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../features/users/user.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router, private notifyService: NotificationService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService.username;
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.notifyService.showSuccess('Successfully Logged Out', 'Logout');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => console.log(err),
    });
  }
}
