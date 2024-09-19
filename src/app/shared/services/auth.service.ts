declare var google: any;
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // Inject the Router service for navigation
  router = inject(Router)

  constructor() { }

  // stores a token in local storage
  login(email: string, password: string) {
    // Store a randomly generated token
    localStorage.setItem("token", Math.random() + "")
  }
  // Sign out method
  signOut() {
    // Calls Google API to disable automatic account selection
    google.accounts.id.disableAutoSelect();
    // Navigate to the root route (homepage) after signing out
    this.router.navigate(['/']);
  }

}
