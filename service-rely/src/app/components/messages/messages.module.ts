import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesTableComponent } from './components/messages-table/messages-table.component';
import { MessagesHeaderComponent } from './components/messages-header/messages-header.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort"
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MessagesTableComponent, MessagesHeaderComponent, MessagesPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    SharedModule
  ]
})
export class MessagesModule { }
