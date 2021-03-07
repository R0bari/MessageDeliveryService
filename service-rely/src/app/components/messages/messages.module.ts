import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesTableComponent } from './components/messages-table/messages-table.component';
import { MessagesHeaderComponent } from './components/messages-header/messages-header.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

@NgModule({
  declarations: [MessagesTableComponent, MessagesHeaderComponent, MessagesPageComponent],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
