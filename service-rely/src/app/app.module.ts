import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeadComponent } from '../components/app-head/app-head.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeadComponent,
    MainMenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
