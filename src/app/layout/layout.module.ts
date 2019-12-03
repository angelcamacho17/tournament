import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
      CommonModule,
      LayoutRoutingModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatListModule
  ],
  declarations: [ LayoutComponent, SidebarComponent]
})
export class LayoutModule { }

