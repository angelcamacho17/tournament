import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
        {
          path: 'team',
          loadChildren: './team/team.module#TeamModule'
        },
        {
          path: 'player',
          loadChildren: './player/player.module#PlayerModule'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

