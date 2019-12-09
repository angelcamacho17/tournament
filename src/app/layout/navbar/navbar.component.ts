import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../shared/user';
import { LoginService } from 'src/app/services/login.service';
import { Team } from 'src/app/shared/team';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  public user: User;
  public team: Team;
  public teamImageUrl: string = "assets/images/teams/";
  public userImageUrl: string = "assets/images/players/"

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private loginService: LoginService,
              private dataService: DataService) {}

  ngOnInit(){
    if (this.loginService.getUser() === undefined || this.loginService.getUser() === null)
    {
      this.logOut();
      return; 
    } 
    else {
      this.user = this.loginService.getUser();
      this.team = this.dataService.getTeam(this.user.team_code);
      this.teamImageUrl = this.teamImageUrl + this.team.shield;
      this.userImageUrl = this.userImageUrl + this.user.player_code+".jpg";
      console.log(this.team);
      console.log(this.user);
    }
  }

  logOut(): void{
    this.loginService.logOut();
  }
}
