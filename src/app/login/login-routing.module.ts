import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthGuard } from '../shared/guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class LoginRoutingModule { }
