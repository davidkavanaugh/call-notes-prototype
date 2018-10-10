import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-clear-btn-dialog',
  templateUrl: './clear-btn-dialog.component.html',
  styleUrls: ['./clear-btn-dialog.component.css']
})
export class ClearBtnDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClearBtnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
