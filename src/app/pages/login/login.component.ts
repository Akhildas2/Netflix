declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BG_iMG_URL, LOGO_URL } from '../constants/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router)
  logUrl = LOGO_URL;
  bgUrl=BG_iMG_URL;
  ngOnInit(): void {

    google.accounts.id.initialize({
      client_id: '603795361310-drm8b24rblspo3o5njhmh6si6681ada6.apps.googleusercontent.com',
      callback: (resp: any) => {
        this.handleLogin(resp)
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: "large",
      shape: 'rectangle',
      width: 350

    })

  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      //navigate to home page
      this.router.navigate(['browse'])
    }
  }
}
