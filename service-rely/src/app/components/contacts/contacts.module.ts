import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ContactsHeaderComponent, 
    ContactsTableComponent, 
    ContactsPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ContactsModule { }
