import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-restorebtn-dialog',
  templateUrl: './restorebtn-dialog.component.html',
  styleUrls: ['./restorebtn-dialog.component.css']
})
export class RestorebtnDialogComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
