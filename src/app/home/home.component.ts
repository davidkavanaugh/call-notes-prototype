import { Component, OnInit } from '@angular/core';

export interface Response {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'callNotes';
  selectedValue: string;

  question1: Response[] = [
    {value: 'Policy holder called to', viewValue: 'Yes'},
    {value: 'Policy holder\'s spouse called to', viewValue: 'No, I\'m a spouse.'}
  ];

  question2: Response[] = [
    {value: 'get a quote for', viewValue: 'Receive a quote'},
    {value: 'file new claim', viewValue: 'File a claim'}
  ];
  question3: Response[] = [
    {value: 'Question 3 Answer', viewValue: 'Answer'}
  ];

  question4: Response[] = [
    {value: 'Question 4 Answer', viewValue: 'Answer'}
  ];
  question5: Response[] = [
    {value: 'Question 5 Answer', viewValue: 'Answer'}
  ];

  question6: Response[] = [
    {value: 'Question 6 Answer', viewValue: 'Answer'}
  ];
  question7: Response[] = [
    {value: 'Question 7 Answer', viewValue: 'Answer'}
  ];

  question8: Response[] = [
    {value: 'Question 8 Answer', viewValue: 'Answer'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
