import { Component, OnInit } from '@angular/core';
import { Team, TeamResolved, TeamDetailC } from 'src/app/shared/team';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from 'src/app/services/fixture.service';
import { Fixture } from 'src/app/shared/fixture';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  teamDetail: TeamDetailC;
  errorMessage: string;
  displayedColumns: string[] = ['player', 'number', 'goals', 'assits','yellow','red','captain',"available"];
  dataSource = [
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

  constructor(private route: ActivatedRoute,
              private fixtureService: FixtureService) { }

  ngOnInit(): void {
    const resolvedData: TeamResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.team = resolvedData.team ;
    //this.teamDetail = this.fixtureService.getTeamFixture(this.team.code);
    //console.log(this.teamDetail);
  }
}
