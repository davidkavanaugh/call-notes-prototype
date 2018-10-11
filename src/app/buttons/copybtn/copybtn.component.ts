import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-copybtn',
  templateUrl: './copybtn.component.html',
  styleUrls: ['./copybtn.component.css']
})
export class CopybtnComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}
  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1500,
    });

}
}
