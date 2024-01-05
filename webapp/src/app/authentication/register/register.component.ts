import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  constructor(private router: Router) {
  }

  // Navigate to the login page
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Replace '/login' with your actual login route
  }
}
