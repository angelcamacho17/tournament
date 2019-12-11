import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/shared/player';
import { LoginService } from 'src/app/services/login.service';
import { Team } from 'src/app/shared/team';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public player: Player ;
  public team : Team ;
  private _players: Player[];

  constructor(private dataService: DataService,
              private loginService: LoginService) {
        const user = this.loginService.getUser();
        this.dataService.getPlayers().subscribe(data=>{
          this._players = data;
          this.player = this._players.find( player => player.code === user.player_code);
          this.team = this.dataService.getTeam(this.player.team_code);
        });
   }

  ngOnInit() {

  }

}
