import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  tableColumns = ['contactName', 'contactEmail'];
  dataSource: MatTableDataSource<Contact>;
  constructor() { }

  ngOnInit(): void {
  }

}
