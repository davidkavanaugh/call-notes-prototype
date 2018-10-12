import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsbtnDialogComponent } from './settingsbtn-dialog/settingsbtn-dialog.component';

@Component({
  selector: 'app-settingsbtn',
  templateUrl: './settingsbtn.component.html',
  styleUrls: ['./settingsbtn.component.css']
})
export class SettingsbtnComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  login(): void {
    const dialogRef = this.dialog.open(SettingsbtnDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
