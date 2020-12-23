import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeadComponent } from './components/app-head/app-head.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CardComponent } from './components/card/card.component';
import { MessagesPageComponent } from './components/messages/messages-page/messages-page.component';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { MessagesFilterComponent } from './components/messages/messages-filter/messages-filter.component';
import { MessagesTableComponent } from './components/messages/messages-table/messages-table.component';
import { MessagesTableHeaderComponent } from './components/messages/messages-table-header/messages-table-header.component';
import { MessagesTableBodyComponent } from './components/messages/messages-table-body/messages-table-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeadComponent,
    MainMenuComponent,
    CardComponent,
    MessagesPageComponent,
    GreetingPageComponent,
    MessagesFilterComponent,
    MessagesTableComponent,
    MessagesTableHeaderComponent,
    MessagesTableBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
