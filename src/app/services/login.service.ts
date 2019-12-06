import { Injectable } from '@angular/core';
import { User } from '../layout/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: User;
  constructor(private router: Router) { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User){
    this.user = user;
  }
  
  logIn(user): void {
    this.setUser(user);
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
  
  logOut(): void{
    this.user = null;
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}
