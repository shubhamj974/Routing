import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser, userType } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public userId!: number;
  public userObj!: Iuser;
  public canEdit: userType = userType.Admin;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['userID'];
    this.userObj = this._userService.getSingleUser(this.userId);

    this.canEdit = this._route.snapshot.queryParams['canEdit'];
  }

  onUserEdit(UserName: HTMLInputElement) {
    let obj: Iuser = {
      userName: UserName.value,
      id: this.userId,
      userType: this.userObj.userType,
    };
    this._userService.updateSinglerUser(obj);
  }
}
