import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public teams: Team[];

  constructor(private dataService: DataService) {
    this.dataService.getTeams().subscribe((data:any)=>{
      this.teams = data;
    });
   }

  ngOnInit() {
  }

}
