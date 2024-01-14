import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
