import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LandingComponent } from './landing/landing/landing.component';
import { NotFoundComponent } from './landing/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'landing-page', component: LandingComponent},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }