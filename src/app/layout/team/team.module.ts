import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatGridListModule } from '@angular/material';
import { TeamComponent } from './team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list.component';

@NgModule({
  imports: [
      CommonModule,
      TeamRoutingModule,
      MatGridListModule,
      MatCardModule,
      MatCardModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [
    TeamListComponent,
    TeamComponent,
    TeamDetailComponent,
    
  ]
})
export class TeamModule {}
