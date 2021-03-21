import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url = environment.defaultUrl + 'auth';
  private logoutUrl = this.url + '/sign-out';

  constructor(private http: HttpClient) {}

  private auth(login: string, password: string) {
    return this.http.post<any>(this.url, {login: login, password: password});
  }

  authAction(login, password, callBack: Function) {
    this.auth(login, password).subscribe(res => {
      if (typeof callBack === 'function') {
        callBack(res);
      }
    });
  }

  logout() {
    return this.http.get<any>(this.logoutUrl);
  }
}
