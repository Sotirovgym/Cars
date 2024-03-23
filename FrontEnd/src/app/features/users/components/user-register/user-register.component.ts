import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    const { username, email, password, tel } = form.value;
    this.userService.register(username, email, password, tel).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }
}
