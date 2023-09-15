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

  logIn() {
    this._snackBar.openSnackBar(`Login Successfully Completed`);
    localStorage.setItem('Token', 'shubham');
    this.loginStatus = true;
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
        this._router.navigate(['/']);
        localStorage.removeItem('Token');
        this.loginStatus = false;
        return;
      } else {
        return;
      }
    });
  }
}
