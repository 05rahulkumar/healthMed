import { Component } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  loginFormData = {
    email: '',
    password: ''
  };

  signupFormData = {
    name: '',
    email: '',
    password: ''
  };

  login() {
    console.log('Login form submitted:', this.loginFormData);
    // Add logic to handle login
  }

  signup() {
    console.log('Signup form submitted:', this.signupFormData);
    // Add logic to handle signup
  }
}

