import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']); // Change '/login' to your actual login path
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']); // Change '/register' to your actual register path
  }
}
