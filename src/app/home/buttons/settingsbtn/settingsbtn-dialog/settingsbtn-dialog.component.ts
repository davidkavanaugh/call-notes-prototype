import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-settingsbtn-dialog',
  templateUrl: './settingsbtn-dialog.component.html',
  styleUrls: ['./settingsbtn-dialog.component.css']
})
export class SettingsbtnDialogComponent implements OnInit {
  username = new FormControl('', [Validators.required, ]);
  password = new FormControl('', [Validators.required, ]);

  constructor(
    public dialogRef: MatDialogRef<SettingsbtnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }


  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' :
            '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
