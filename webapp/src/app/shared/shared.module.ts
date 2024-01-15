import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
