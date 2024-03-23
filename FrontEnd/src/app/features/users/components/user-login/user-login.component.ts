import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { username, password } = form.value;
    this.userService.login(username, password).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }
}
