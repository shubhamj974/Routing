import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public usersInfo: Array<Iuser> = [];
  constructor(private _userServices: UsersService, private _router: Router) {}

  ngOnInit(): void {
    this.usersInfo = this._userServices.allUsers();
  }

  OnLoadProducts() {
    this._router.navigate(['/products']);
  }
}
