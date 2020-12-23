import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-filter',
  templateUrl: './messages-filter.component.html',
  styleUrls: ['./messages-filter.component.scss']
})
export class MessagesFilterComponent implements OnInit {
  daysOfWeek : string[] = [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  currentDate : string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentDate = this.prepareDate(new Date());
  }

  prepareDate(date: Date) {
    let dateString = date.toLocaleString('ru', { day: 'numeric', month: 'long' }) + ' ';
    dateString += date.getFullYear() + ' год, ';
    dateString += this.daysOfWeek[date.getDay()];
    return dateString;
  }

}
