import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileInfo } from 'src/types/ProfileInfo';
import { User } from 'src/types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProfileInfo(){
    return this.http.get<User>('/api/users/profile');
  }

  updateProfileInfo(userData: ProfileInfo){
    return this.http.put<User>('/api/users/profile', userData);
  }
}
