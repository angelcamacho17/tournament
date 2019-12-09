import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Team } from '../shared/team';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private users: User[];
    private teams: Team[];

    constructor(private http: HttpClient) {
    }

    public getTeam(code: string): Team{
        return this.teams.find(team => team.code === code);
    }

    public getTeams(): Observable<Team[]> {
        if (this.teams) {
            console.warn('YA LO TENIA');
            console.log(this.teams);
            return of(this.teams);
        } else {
            console.warn('no lo tengo');
            return this.http.get<any>("assets/data/teams.json").pipe(map((data: any) => {
                this.teams = data.teams;
                console.log(this.teams);
                return this.teams;
            }))
        }
    }

    getUsers():  Observable<User[]> {
        if (this.users) {
            console.warn('YA LO TENIA');
            console.log(this.users);
            return of(this.users);
        } else {
            console.warn('no lo tengo');
            return this.http.get<any>("assets/data/users.json").pipe(map((data: any) => {
                this.users = data.users;
                console.log(this.users);
                return this.users;
            }))
        }
    }

    getUser(code: string): User{
        return this.users.find(user => user.user === code );
    }

    //   Teams(): Observable<Team[]>{
    //     return this.http.get<Team[]>("assets/data/teams.json")
    //      .pipe(
    //        tap(data => this.teams = data),
    //        catchError(this.handleError)
    //      );
    //    }

    //   getUsers(): Observable<User[]>{
    //    return this.http.get<User[]>("assets/data/users.json")
    //     .pipe(
    //       tap(data => this.users = data),
    //       catchError(this.handleError)
    //     );
    //   }

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
