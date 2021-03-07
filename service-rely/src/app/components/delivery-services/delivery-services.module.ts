import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DeliveryServicesTableComponent } from './components/delivery-services-table/delivery-services-table.component';
import { MatTableModule } from "@angular/material/table";
import { DeliveryServicesPageComponent } from './pages/delivery-services-page/delivery-services-page.component';
import { DeliveryServicesHeaderComponent } from './components/delivery-services-header/delivery-services-header.component';

@NgModule({
  declarations: [DeliveryServicesTableComponent, DeliveryServicesPageComponent, DeliveryServicesHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule
  ]
})
export class DeliveryServicesModule { }
