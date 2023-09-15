import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginStatus: boolean = false;
  constructor(private _router: Router) {}

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('Token')) {
          return (this.loginStatus = true);
        } else {
          return (this.loginStatus = false);
        }
      }, 300);
      resolve(this.loginStatus);
    });
  }

  logIn() {
    localStorage.setItem('Token', 'shubham');
    this.loginStatus = true;
  }

  logOut() {
    this._router.navigate(['/']);
    localStorage.removeItem('Token');
    this.loginStatus = false;
  }
}
