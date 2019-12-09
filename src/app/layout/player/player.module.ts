import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutingModule } from './player-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatGridListModule } from '@angular/material';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
      CommonModule,
      PlayerRoutingModule,
      MatGridListModule,
      MatCardModule,
      MatCardModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {}
