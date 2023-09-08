import { Iuser } from './../../../models/users';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userId!: number;
  public userObj!: Iuser;
  constructor(
    private _route: ActivatedRoute,
    private _usersServices: UsersService
  ) {}

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['userID'];
    this.userObj = this._usersServices.getSingleUser(this.userId);

    this._route.params.subscribe((param: Params) => {
      this.userId = +param['userID'];
      this.userObj = this._usersServices.getSingleUser(this.userId);
    });
  }
}
