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
  public usersInfo!: Array<Iuser>;
  public selectedUser!: string;
  constructor(private _userServices: UsersService, private _router: Router) {}

  ngOnInit(): void {
    this.usersInfo = this._userServices.allUsers();
    let defaultUser = this.usersInfo[0];
    this.selectedUser = defaultUser.id;
    this._router.navigate([`users/${this.selectedUser}`]);
  }

  OnLoadProducts() {
    this._router.navigate(['/products']);
  }
}
