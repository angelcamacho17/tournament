import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TeamResolved, Team } from 'src/app/shared/team';
import { DataService } from 'src/app/services/data.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TeamResolver implements Resolve<TeamResolved>{
    
    constructor( private dataService: DataService){ }

    resolve( route: ActivatedRouteSnapshot): TeamResolved{
        const id = route.paramMap.get('id');
        
        return {team:this.dataService.getTeam(id)}; 
    }
}