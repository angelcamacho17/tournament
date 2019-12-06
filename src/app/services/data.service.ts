import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Team } from '../shared/team';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: User[] = [];
  private teams: Team[] = [];

  constructor(private http: HttpClient) {
  }

  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>("assets/data/teams.json")
     .pipe(
       tap(data => this.teams = data),
       catchError(this.handleError)
     );
   }

  getUsers(): Observable<User[]>{
   return this.http.get<User[]>("assets/data/users.json")
    .pipe(
      tap(data => this.users = data),
      catchError(this.handleError)
    );
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
