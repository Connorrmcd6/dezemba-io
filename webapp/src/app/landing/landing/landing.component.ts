import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  products = [
    { value: 'leave', viewValue: 'Leave Tracking' },
    { value: 'attendance', viewValue: 'Attendance Tracking (coming soon)' },
    { value: 'okr', viewValue: 'OKR/KPI Tracking (coming soon)' }
  ];

  plans = [
    { value: 'plan1', viewValue: 'Plan 1' },
    { value: 'plan2', viewValue: 'Plan 2' },
    { value: 'plan3', viewValue: 'Plan 3' }
  ];

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
