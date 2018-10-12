import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ClearBtnDialogComponent } from './clear-btn-dialog/clear-btn-dialog.component';

@Component({
  selector: 'app-clearbtn',
  templateUrl: './clearbtn.component.html',
  styleUrls: ['./clearbtn.component.css']
})
export class ClearbtnComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ClearBtnDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
