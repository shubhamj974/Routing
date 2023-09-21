import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public isAccount: boolean = true;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide = true;
  constructor(private _authServices: AuthService) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin(userName: string, userPass: string) {
    this._authServices.logIn(userName, userPass);
  }
}
