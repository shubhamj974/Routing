import { MatSelectModule } from '@angular/material/select';
import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

    // if (this._route.snapshot.queryParams['canEdit'] === 'Admin') {
    //   this.canEdit = false;
    // }

    this._route.queryParams.subscribe((queryParam: Params) => {
      if (queryParam.hasOwnProperty('canEdit')) {
        if (queryParam['canEdit'] === 'Admin') {
          this.canEdit = false;
          return;
        }
        return;
      }
    });
  }

  onUserEdit(UserName: HTMLInputElement, userType: MatSelectModule) {
    let obj: Iuser = {
      userName: UserName.value,
      id: this.userId,
      userType: userType as userType,
    };
    this._userService.updateSinglerUser(obj);
  }

  onAddNewUser(userName: string, userType: MatSelectModule) {
    let obj: Iuser = {
      userName: userName,
      userType: userType as userType,
      id: this._utilityService.uuid(),
    };
    this._userService.addNewUser(obj);
  }
}
