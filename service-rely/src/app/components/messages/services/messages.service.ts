import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  controllerUrl: string = 'messages/';

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(environment.defaultUrl + this.controllerUrl);
  }

  deleteMessage(id: number) {
    return this.http.delete(environment.defaultUrl + this.controllerUrl + id);
  }
}
