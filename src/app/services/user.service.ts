import { Injectable } from '@angular/core';
import { User } from '../layout/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  constructor(private router: Router) { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User){
    this.user = user;
  }
  logOut(): void{
    this.user = null;
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}
