import { Component, OnInit } from '@angular/core';
import { Team, TeamResolved } from 'src/app/shared/team';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: TeamResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.team = resolvedData.team ;
  }
}
