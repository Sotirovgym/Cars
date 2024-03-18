import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
