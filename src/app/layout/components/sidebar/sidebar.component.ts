import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from 'src/app/services/user.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public user: User;
constructor(
  private userService: UserService) { }

  ngOnInit() {
    let aux: User = {
      id: 1,
      imageUrl: "string",
      password: "string",
      email : 'angel@gm.vom',
      team : 'arepa'
    };
    this.user = this.userService.getUser() !== undefined && this.userService.getUser() !== null ? this.userService.getUser() : aux;
  }

  addExpandClass( element: any){
  }
}
