import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-snackbardemo',
  templateUrl: './snackbardemo.component.html',
  styleUrls: ['./snackbardemo.component.css']
})
export class SnackbardemoComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });

}
