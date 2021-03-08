import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeadComponent } from './components/app-head/app-head.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryServicesModule } from './components/delivery-services/delivery-services.module';
import { MessagesModule } from './components/messages/messages.module';
import { ContactsModule } from './components/contacts/contacts.module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeadComponent,
    GreetingPageComponent,
    MainMenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeliveryServicesModule,
    MessagesModule,
    ContactsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
