import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class DialogBoxService {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    return this.dialog.open(DialogBoxComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
