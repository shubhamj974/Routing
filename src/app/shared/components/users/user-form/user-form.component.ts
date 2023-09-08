import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public userId!: number;
  public userObj!: Iuser;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['userID'];
    this.userObj = this._userService.getSingleUser(this.userId);
  }

  onUserEdit(UserName: HTMLInputElement) {
    let obj: Iuser = {
      userName: UserName.value,
      id: this.userId,
    };
    this._userService.updateSinglerUser(obj);
  }
}
