import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  email!: string;// Declaration of the email
  constructor(private router: Router, private toastr: ToastrService) { }

  // Method to handle form submission
  onSubmit() {
    if (!this.email) {
      this.toastr.warning('Please provide email ', 'Warning');
      return;
    }
  }

  // Method to navigate to the login page
  goToLogin() {
    this.router.navigate(['/login'])
  }
}
