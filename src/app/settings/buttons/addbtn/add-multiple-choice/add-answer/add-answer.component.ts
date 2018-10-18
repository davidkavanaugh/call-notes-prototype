import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  addAnswer() {
    const answer = document.getElementById('answer').value;
    const answers = document.getElementById('answers');
    const lineBreak = document.createElement('BR');
    const listItem = document.createElement('MAT-LIST-ITEM');
    listItem.innerHTML = answer;
    answers.appendChild(listItem);
    answers.appendChild(lineBreak);
    document.getElementById('answer').value = '';
  }
}
