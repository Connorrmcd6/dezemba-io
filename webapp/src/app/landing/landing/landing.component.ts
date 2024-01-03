import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  // Navigate to the login page
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Replace with your actual login path
  }

  // Navigate to the register page
  navigateToRegister(): void {
    this.router.navigate(['/register']); // Replace with your actual register path
  }
}
