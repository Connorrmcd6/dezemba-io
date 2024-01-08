import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//paths
import { LoginComponent } from './modules/auth/login/login.component';
import { LandingComponent } from './core/landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }