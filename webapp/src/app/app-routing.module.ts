import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//paths
import { LoginComponent } from './feature/auth/login/login.component';
import { LandingComponent } from './core/landing/landing.component';
import { RegisterComponent } from './feature/auth/register/register.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }