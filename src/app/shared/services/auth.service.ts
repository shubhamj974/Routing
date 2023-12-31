import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DialogBoxService } from './dialog-box.service';
import { DialogLogoutComponent } from '../components/dialog-logout/dialog-logout.component';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginStatus: boolean = false;
  constructor(
    private _router: Router,
    private _dialogBoxService: DialogBoxService,
    private _snackBar: SnackBarService
  ) {}

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('Token')) {
          return (this.loginStatus = true);
        } else {
          return (this.loginStatus = false);
        }
      }, 300);
      resolve(this.loginStatus);
    });
  }

  token(userRole: string): void {
    localStorage.setItem('Token', 'JWT Token');
    localStorage.setItem('userRole', userRole);
  }

  logIn(userName: string, userPass: string) {
    this._snackBar.openSnackBar(`Login Successfully Completed`);
    if (userName === 'jhon123@gmail.com' && userPass === 'jhon@123') {
      this.token('candidate');
      this.loginStatus = true;
      this._router.navigate(['']);
    } else if (userName === 'july123@gmail.com' && userPass === 'july@123') {
      this.token('admin');
      this.loginStatus = true;
      this._router.navigate(['']);
    } else if (userName === 'jane123@gmail.com' && userPass === 'jane@123') {
      this.token('superAdmin');
      this._router.navigate(['']);
    } else {
      localStorage.setItem('Token', 'JWT Token');
      this.loginStatus = true;
      this._router.navigate(['']);
    }
  }

  logOut(start: string, exist: string): void {
    const dialogRef = this._dialogBoxService.openDialog(
      start,
      exist,
      DialogLogoutComponent
    );
    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this._snackBar.openSnackBar(`Logout Successfully Completed`);
        this._router.navigate(['auth']);
        localStorage.removeItem('Token');
        localStorage.removeItem('userRole');
        this.loginStatus = false;
        return;
      } else {
        return;
      }
    });
  }
}
