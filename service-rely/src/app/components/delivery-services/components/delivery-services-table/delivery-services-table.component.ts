import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../models/DeliveryService';
import { DeliveryServicesService } from '../../services/delivery-services.service';

@Component({
  selector: 'app-delivery-services-table',
  templateUrl: './delivery-services-table.component.html',
  styleUrls: ['./delivery-services-table.component.scss']
})
export class DeliveryServicesTableComponent implements OnInit {
  books: string[] = [ 'book1', 'book2'];
  deliveryServices: DeliveryService[] = [];
  constructor(public deliveryServicesService: DeliveryServicesService) { }

  async ngOnInit() {
    this.deliveryServicesService.getDeliveryServices()
      .subscribe((data: any) => this.deliveryServices = data);
  }
}
