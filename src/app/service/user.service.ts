import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[] | undefined;
  baseUserPath = 'api/users/';             /* server url */

  constructor(private http: HttpClient) {
  }

  init() {
    this.http.get<User[]>(this.baseUserPath + '/users')
      .subscribe(res => {
        this.user = res;
      });
  }

}


