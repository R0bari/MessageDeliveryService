import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../../models/Contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  tableColumns = ['contactName', 'contactEmail'];
  dataSource: MatTableDataSource<Contact>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public contactsService: ContactsService, private cdr: ChangeDetectorRef) {
    this.contactsService.getContacts()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
      })
  }

  ngOnInit(): void {
  }

}
