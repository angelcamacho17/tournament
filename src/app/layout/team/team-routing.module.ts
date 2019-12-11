import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamResolver } from './team-resolver.service';
import { TeamListComponent } from './team-list.component';
import { TeamListResolver } from './team-list-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: TeamListComponent
    },
    {
        path: ':id',
        component: TeamDetailComponent,
        resolve: { resolvedData: TeamResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule {}
