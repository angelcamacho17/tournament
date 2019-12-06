import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  public user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: LoginService) {}

  ngOnInit(){
    let aux: User = {
      id: 1,
      imageUrl: "string",
      password: "string",
      email : 'angel@gm.vom',
      team : 'arepa'
    };
    this.user = this.userService.getUser() !== undefined && this.userService.getUser() !== null ? this.userService.getUser() : aux;
  }

  logOut(): void{
    this.userService.logOut();
  }
}
