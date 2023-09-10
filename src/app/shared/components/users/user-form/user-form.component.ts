import { UtilityService } from './../../../services/utility.service';
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
  public userId!: string;
  public userObj!: Iuser;
  public canEdit: boolean = true;
  public type = userType;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService,
    private _utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['userID'];
    this.userObj = this._userService.getSingleUser(this.userId);

    if (this._route.snapshot.queryParams['canEdit'] === 'Admin') {
      this.canEdit = false;
    }
  }

  onUserEdit(UserName: HTMLInputElement) {
    let obj: Iuser = {
      userName: UserName.value,
      id: this.userId,
      userType: this.userObj.userType,
    };
    this._userService.updateSinglerUser(obj);
  }

  onAddNewUser(userName: string, userType: HTMLSelectElement) {
    let obj: Iuser = {
      userName: userName,
      userType: userType.value as userType,
      id: this._utilityService.uuid(),
    };
    this._userService.addNewUser(obj);
  }
}
