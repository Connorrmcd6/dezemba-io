import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  
  lastThreeLetters: string = "";

  constructor(private router: Router) {
    const titleText = 'Welcome to dezemba.io'; // Replace with your actual title
    if (titleText.length > 3) {
      this.lastThreeLetters = titleText.slice(-3);
    }
  }

  navigateToLogin(): void {
      this.router.navigate(['/login']); // Change '/login' to your actual login path
  }
}
