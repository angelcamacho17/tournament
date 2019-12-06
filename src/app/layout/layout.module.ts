import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule 
} from '@angular/material';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

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
      MatListModule,
      MatSelectModule 
  ],
  declarations: [ LayoutComponent, NavbarComponent]
})
export class LayoutModule { }

