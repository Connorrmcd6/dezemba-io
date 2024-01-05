import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  private landingPageRoute = '/landing-page'; // Define your landing page route here

  constructor(private router: Router) {}

  // Method to navigate to the landing page
  navigateToLanding(): void {
    this.router.navigate([this.landingPageRoute])
      .catch(err => {
        console.error('Error navigating to the landing page:', err);
        // Implement fallback strategy or error handling, e.g., redirect to a default route
        // this.router.navigate(['/default-route']);
      });
  }
}
