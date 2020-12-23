import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './app-head.component.html',
  styleUrls: [
    './app-head.component.scss'
  ]
})
export class AppHeadComponent implements OnInit {

  @Input() title : string = '';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
