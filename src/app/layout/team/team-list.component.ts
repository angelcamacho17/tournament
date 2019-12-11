import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/shared/team';

@Component({
  templateUrl: './team-list.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamListComponent implements OnInit {

    public teams: Team[];

    constructor(private dataService: DataService,
                private route: ActivatedRoute) {
         this.dataService.getTeams().subscribe((data:any)=>{
           this.teams = data;
         });
     }
  
    ngOnInit(): void{
        // const resolvedData = this.route.snapshot.data['resolveData'];
        // console.log(resolvedData);
        // this.teams = resolvedData;
    }

}
