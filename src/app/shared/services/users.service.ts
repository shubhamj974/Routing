import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public usersArr: Array<Iuser> = [
    {
      userName: 'jhon',
      id: 1,
    },
    {
      userName: 'july',
      id: 2,
    },
    {
      userName: 'james',
      id: 3,
    },
    {
      userName: 'Tonny',
      id: 4,
    },
    {
      userName: 'Magnus',
      id: 5,
    },
  ];
  constructor(private _router: Router) {}

  allUsers(): Array<Iuser> {
    return this.usersArr;
  }

  getSingleUser(id: number): Iuser {
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
}
