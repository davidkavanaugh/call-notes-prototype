import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddbtnDialogComponent } from './addbtn-dialog/addbtn-dialog.component';

@Component({
  selector: 'app-addbtn',
  templateUrl: './addbtn.component.html',
  styleUrls: ['./addbtn.component.css']
})
export class AddbtnComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  addQuestion(): void {
    const dialogRef = this.dialog.open(AddbtnDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
