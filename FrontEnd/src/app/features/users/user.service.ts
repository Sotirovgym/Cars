import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string, tel: string) {
    console.log('UserService.register()');
    return this.http.post('/api/register', { username, email, password, tel });
  }

  login(username: string, password: string) {
    return this.http.post('/api/login', { username, password });
  }

  logout() {}
}
