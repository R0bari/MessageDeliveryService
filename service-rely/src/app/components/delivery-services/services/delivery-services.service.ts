import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class DeliveryServicesService {

  constructor(private http: HttpClient) { }

  getDeliveryServices() {
    return this.http.get(environment.defaultUrl + 'services');
  }
}
