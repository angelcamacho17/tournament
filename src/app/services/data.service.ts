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
    private users: User[] = [];
    private teams: Team[];

    constructor(private http: HttpClient) {
        // this.http.get<Team[]>("assets/data/teams.json").subscribe((data:any)=>{
        //     this.teams = data.teams;
        // });
        // this.http.get<User[]>("assets/data/users.json").subscribe(data=>{
        //     this.users = data; console.log(data);
        // });
    }

    public getTeams(): Observable<Team[]> {
        if (this.teams) {
            console.warn('YA LO TENIA');
            return of(this.teams);
        } else {
            console.warn('no lo tengo');
            return this.http.get<any>("assets/data/teams.json").pipe(map((data: any) => {
                this.teams = data.teams;
                return this.teams;
            }))
        }
    }

    getUsers(): User[] {
        return this.users;
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
