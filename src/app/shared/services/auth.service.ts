declare var google: any;
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)

  constructor() { }
  login(email: string, password: string) {
    localStorage.setItem("token", Math.random() + "")
  }

  signOut() {
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['/']);
  }

}
