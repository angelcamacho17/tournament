import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/shared/player';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: Player ;

  constructor(private dataService: DataService,
              private loginService: LoginService) {

   }

  ngOnInit() {

  }

}
