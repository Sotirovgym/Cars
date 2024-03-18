import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  { path: 'register', component: UserRegisterComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
