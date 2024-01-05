import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
    constructor(private router: Router) {
    }

    // Navigate to the login page
    navigateToLanding(): void {
      this.router.navigate(['/landing-page']); // Replace '/landing-page' with your actual login route
    }
}
