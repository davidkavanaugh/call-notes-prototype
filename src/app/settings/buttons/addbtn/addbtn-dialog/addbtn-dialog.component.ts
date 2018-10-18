import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddMultipleChoiceComponent } from '../add-multiple-choice/add-multiple-choice.component';
import { MatDialog } from '@angular/material';

export interface DialogData {
  name: string;
  answer: string;
}


@Component({
  selector: 'app-addbtn-dialog',
  templateUrl: './addbtn-dialog.component.html',
  styleUrls: ['./addbtn-dialog.component.css']
})
export class AddbtnDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddbtnDialogComponent>,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });

    }
    addMultipleChoice(): void {
      const dialogRef = this.dialog.open(AddMultipleChoiceComponent, {
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}

