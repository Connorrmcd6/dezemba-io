import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  lastThreeLetters: string = "";

  constructor(private router: Router) {
    const titleText = 'Welcome to dezemba.io'; // Replace with your actual title
    if (titleText.length > 3) {
      this.lastThreeLetters = titleText.slice(-3);
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']); // Change '/register' to your actual register route
  }
  navigateToLanding(): void {
    this.router.navigate(['/landing']); // Change '/register' to your actual register path
  }
}
