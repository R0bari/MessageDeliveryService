import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesTableComponent } from './components/messages-table/messages-table.component';
import { MessagesHeaderComponent } from './components/messages-header/messages-header.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [MessagesTableComponent, MessagesHeaderComponent, MessagesPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MessagesModule { }
