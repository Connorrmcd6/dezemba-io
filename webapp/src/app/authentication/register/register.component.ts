import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  constructor(private router: Router) {
  }

  navigateToLogin(): void {
      this.router.navigate(['/login']); // Change '/login' to your actual login path
  }
}
