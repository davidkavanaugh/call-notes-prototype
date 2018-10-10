import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ClearBtnDialogComponent } from './clear-btn-dialog/clear-btn-dialog.component';

@Component({
  selector: 'app-clearbtn',
  templateUrl: './clearbtn.component.html',
  styleUrls: ['./clearbtn.component.css']
})
export class ClearbtnComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ClearBtnDialogComponent, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
