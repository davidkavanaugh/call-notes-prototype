import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { RestorebtnDialogComponent } from './restorebtn-dialog/restorebtn-dialog.component';

@Component({
  selector: 'app-restorebtn',
  templateUrl: './restorebtn.component.html',
  styleUrls: ['./restorebtn.component.css']
})
export class RestorebtnComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this.bottomSheet.open(RestorebtnDialogComponent);
  }

  ngOnInit() {
  }

}
