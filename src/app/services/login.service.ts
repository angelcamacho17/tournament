import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: User;
  constructor(private router: Router,
              private http: HttpClient,
              private dataService: DataService) {
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User){
    this.user = user;
  }
  
  logIn(post): void {
    if ( this.dataService.getUser(post.user) === undefined){
      return ;
    }
    this.setUser(this.dataService.getUser(post.user));
    if ( this.user.team_code !== post.team){
      return;
    }
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
  
  logOut(): void{
    this.user = null;
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
