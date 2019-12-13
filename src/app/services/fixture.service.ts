import { Injectable } from "@angular/core";
import { DataService } from './data.service';
import { Team , TeamDetailC} from '../shared/team';
import { Fixture } from '../shared/fixture';
import { Observable, of } from 'rxjs';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Injectable({
    providedIn:'root'
})

export class FixtureService {

    private stats: TeamDetailC[] = [];
    private positions: any[] = [];
    constructor( private dataService: DataService){}

    getTeamFixture(code: string): any{
        let fixtures;
        let teamFixtures: Fixture[] = [];
        if (this.positions.length === 0){
          this.dataService.getFixtures().subscribe(data=>{
              fixtures = data;
              if (fixtures){
                  this.dataService.getTeams().subscribe(teams=>{
                      if (teams){
                          this.addTeams(teams);
                      }
                       return this.calculateDetail(fixtures, code);

                  })
              }
          });
        }
        else{
          this.positions.map(team =>{
            if (team.teamCode === code){
              return team;
            }
          });
        }
    }

    calculatePositions(code: string){
        let position = this.stats.length;
        for (let team of this.stats){
            for ( let otherTeam of this.stats){
                if ( team.points > otherTeam.points){
                    position--;
                }
            }
            this.positions[position]=this.stats[team.id];
            position = this.stats.length;
        }
        this.positions.map(team =>{
          if (team.teamCode === code){
            return team;
          }
        });
    }

    addTeams(teams: Team[]): void{
        let i=0;
        if(this.stats.length===0){
            for (let team of teams){
                let teamStat: TeamDetailC={
                    id: i,
                    teamCode: team.code,
                    points:0,
                    won: 0,
                    matches: 0,
                    lost:0,
                    draw:0,
                    position:0
                }
                this.stats.push(teamStat);
                i++;
            }
        }
    }

    calculateDetail( fixtures: Fixture[], code: string) {
        for (let teamStats of this.stats){
            for (let fixture of fixtures){
               if (fixture.home === teamStats.teamCode){
                    if ( fixture.score_home > fixture.score_away){
                        // acum points and increment wons to the home team
                            teamStats.points = teamStats.points + 3;
                            teamStats.matches = teamStats.matches + 1;
                            teamStats.won = teamStats.won + 1;
                            this.stats[teamStats.id] = teamStats;
                        }
                    else if (fixture.score_home < fixture.score_away){
                        // increment lost to the home team
                        teamStats.matches = teamStats.matches + 1;
                        teamStats.lost = teamStats.lost + 1;
                        this.stats[teamStats.id] = teamStats;
                        }
                    else {
                        teamStats.matches = teamStats.matches + 1;
                        teamStats.draw = teamStats.draw + 1;
                        this.stats[teamStats.id] = teamStats;
                        }
                    }
                }
            }
            return this.calculatePositions(code);
        }

}
