import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(environment.defaultUrl + 'contacts');
  }

  deleteContact(id: number) {
    return this.http.delete(environment.defaultUrl + 'contacts');
  }
}
