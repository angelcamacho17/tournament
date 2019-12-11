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
  info :[
    {
      player: "Angel Camacho",
      number: "10",
      goals: "7",
      assits: "4",
      yellow: "2",
      red: "0",
      captain: true,
      available: false
    },
    {
      player: "Federico Ribero",
      number: "11",
      goals: "7",
      assits: "1",
      yellow: "2",
      red: "0",
      captain: false,
      available: true
    },
    {
      player: "Borioni",
      number: "2",
      goals: "1",
      assits: "2",
      yellow: "0",
      red: "1",
      captain: false,
      available: true
    },
    {
      player: "Marcel Castellanos",
      number: "14",
      goals: "3",
      assits: "2",
      yellow: "3",
      red: "0",
      captain: false,
      available: false
    },
    {
      player: "Daniel Quintero",
      number: "30",
      goals: "2",
      assits: "2",
      yellow: "0",
      red: "0",
      captain: false,
      available: false
    },
    {
      player: "Enrique Camacho",
      number: "1",
      goals: "22",
      assits: "1",
      yellow: "6",
      red: "0",
      captain: false,
      available: false
    },
    {
      player: "Valeria Camacho",
      number: "54",
      goals: "3",
      assits: "3",
      yellow: "2",
      red: "0",
      captain: false,
      available: true
    },{
      player: "Augusto Camacho",
      number: "23",
      goals: "3",
      assits: "2",
      yellow: "2",
      red: "0",
      captain: false,
      available: false
    },
    {
      player: "Angel Camacho",
      number: "10",
      goals: "7",
      assits: "4",
      yellow: "2",
      red: "0",
      captain: true,
      available: false
    },
    {
      player: "Angel Camacho",
      number: "10",
      goals: "7",
      assits: "4",
      yellow: "2",
      red: "0",
      captain: true,
      available: false
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: TeamResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.team = resolvedData.team ;
  }
}
