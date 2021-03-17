import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  controllerUrl: string = 'contacts/';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(environment.defaultUrl + this.controllerUrl + 'list');
  }

  deleteContact(id: number) {
    return this.http.delete(environment.defaultUrl + this.controllerUrl + id);
  }

  insertContact(contact) {
    return this.http.post(environment.defaultUrl + this.controllerUrl, contact);
  }
}
