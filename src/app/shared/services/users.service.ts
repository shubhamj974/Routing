import { Injectable } from '@angular/core';
import { Iuser, userType } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public usersArr: Array<Iuser> = [
    {
      userName: 'jhon',
      id: '1',
      userType: userType.Admin,
    },
    {
      userName: 'july',
      id: '2',
      userType: userType.User,
    },
    {
      userName: 'james',
      id: '3',
      userType: userType.User,
    },
    {
      userName: 'Tonny',
      id: '4',
      userType: userType.Admin,
    },
    {
      userName: 'Magnus',
      id: '5',
      userType: userType.User,
    },
  ];
  constructor(private _router: Router) {}

  allUsers(): Array<Iuser> {
    return this.usersArr;
  }

  getSingleUser(id: string): Iuser {
    return this.usersArr.find((ele) => ele.id === id)!;
  }

  updateSinglerUser(userObj: Iuser) {
    this.usersArr.forEach((user) => {
      if (user.id === userObj.id) {
        user.userName = userObj.userName;
      }
      this._router.navigate(['users']);
      return;
    });
  }

  addNewUser(newObj: Iuser): void {
    this.usersArr.unshift(newObj);
    this._router.navigate(['/users']);
  }
}
