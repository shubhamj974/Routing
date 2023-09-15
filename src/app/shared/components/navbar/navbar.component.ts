import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _authServices: AuthService) {}

  ngOnInit(): void {}

  onLogin() {
    this._authServices.logIn();
  }

  onLogout() {
    this._authServices.logOut();
  }
}
