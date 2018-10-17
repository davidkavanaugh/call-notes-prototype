import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-restorebtn-dialog',
  templateUrl: './restorebtn-dialog.component.html',
  styleUrls: ['./restorebtn-dialog.component.css']
})
export class RestorebtnDialogComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  constructor(private bottomSheetRef: MatBottomSheetRef<RestorebtnDialogComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
