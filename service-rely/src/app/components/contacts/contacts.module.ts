import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsHeaderComponent} from './components/contacts-header/contacts-header.component';
import {ContactsTableComponent} from './components/contacts-table/contacts-table.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button/';
import {CreateContactDialogComponent} from './components/create-contact-dialog/create-contact-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ContactsHeaderComponent, 
    ContactsTableComponent, 
    ContactsPageComponent, CreateContactDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    SharedModule
  ]
})
export class ContactsModule { }
