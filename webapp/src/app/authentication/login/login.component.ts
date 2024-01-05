import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  lastThreeLetters: string = '';

  constructor(private router: Router) {
  
  }

  // Navigate to the registration page
  navigateToRegister(): void {
    this.router.navigate(['/register']); // Replace '/register' with your actual register route
  }

  // Navigate to the landing page
  navigateToLanding(): void {
    this.router.navigate(['/landing-page']); // Replace '/landing' with your actual landing path
  }

  // Navigate to the not-found page (ensure this path exists or add error handling)
  navigateToNotFound(): void {
    this.router.navigate(['/not-found']); // Replace '/not-found' with your actual not-found path
  }

  // Navigate to the home page (ensure this path exists or add error handling)
  navigateToHome(): void {
    this.router.navigate(['/home']); // Replace '/home' with your actual not-found path
  }

}
