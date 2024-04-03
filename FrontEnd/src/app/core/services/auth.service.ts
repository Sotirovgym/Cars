import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/types/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  get user(): User {
    const user: User = JSON.parse(localStorage.getItem('user') || '');
    return user;
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
}
