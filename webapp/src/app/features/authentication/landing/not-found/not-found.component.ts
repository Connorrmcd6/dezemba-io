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

  // Navigate to the landing page
  navigateToLanding(): void {
    this.router.navigate(['/landing-page']); // Replace '/landing' with your actual landing path
  }
}
