import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  lastThreeLetters: string = "";

  constructor() {
    const titleText = 'Welcome to dezemba.io'; // Replace with your actual title
    if (titleText.length > 3) {
      this.lastThreeLetters = titleText.slice(-3);
    }
  }
}
