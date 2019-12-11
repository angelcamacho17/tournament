import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TeamListResolved } from 'src/app/shared/team';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeamListResolver implements Resolve<any>{

    constructor( private dataService: DataService){}

    resolve() {
        this.dataService.getTeams().subscribe((data: any)=>{
            return of(data);
        })
    }
}