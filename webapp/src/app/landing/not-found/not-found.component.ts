import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router: Router) {
  }
  navigateToLanding(): void {
    this.router.navigate(['/landing-page']); // Change '/register' to your actual register path
  }

}
