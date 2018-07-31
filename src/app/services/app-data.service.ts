import { REST_URL } from './auth.constant';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {
  constructor(private http: HttpClient) {
  }

  getTest(): Observable<any> {
    return this.http.get(REST_URL + 'home/users').map(res => console.log(res));
  }

  
}
