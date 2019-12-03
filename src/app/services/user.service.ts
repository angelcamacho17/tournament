import { Injectable } from '@angular/core';
import { User } from '../layout/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User){
    this.user = user;
  }
}
