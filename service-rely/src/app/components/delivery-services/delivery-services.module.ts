import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DeliveryServicesTableComponent } from './components/delivery-services-table/delivery-services-table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DeliveryServicesTableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class DeliveryServicesModule { }
