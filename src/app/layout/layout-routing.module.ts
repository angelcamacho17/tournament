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
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

