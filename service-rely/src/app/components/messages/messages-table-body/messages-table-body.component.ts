import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-table-body',
  templateUrl: './messages-table-body.component.html',
  styleUrls: ['./messages-table-body.component.scss']
})
export class MessagesTableBodyComponent implements OnInit {

  randomDate : string = '';
  randomSize : string = '';
  constructor() { }

  ngOnInit(): void {
    this.randomDate = new Date().toLocaleDateString('ru');
    this.randomSize = Math.floor(Math.random() * 90 + 10) + ' КБ';
  }

}
