import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: 'register', component: UserRegisterComponent },
  { path: 'login', component: UserLoginComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
