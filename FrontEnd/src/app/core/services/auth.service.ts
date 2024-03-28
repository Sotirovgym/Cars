import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from 'src/types/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  get username(): string {
    const user: User = JSON.parse(localStorage.getItem('user') || '');
    return user.username || '';
  }

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string, tel: string) {
    return this.http
      .post<User>('/api/register', { username, email, password, tel })
      .pipe(tap((user) => { // tap is listening and waiting for server to return a result
        localStorage.setItem('user', JSON.stringify(user));
      }));
  }

  login(username: string, password: string) {
    return this.http
      .post<User>('/api/login', { username, password })
      .pipe(tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      }));
  }

  logout() {
    return this.http.post<User>('/api/logout', {}).pipe(
      tap(() => {
        localStorage.removeItem('user');
      })
    );
  }

  getProfile(){
    return this.http.get<User>('/api/users/profile');
  }
}