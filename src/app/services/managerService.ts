
import { Role } from '../beans/roleBean';
import { Team } from '../beans/teamBean';
import { User } from '../beans/userBean';
import {Injectable} from '@angular/core';
import {REST_URL} from '../services/auth.constant';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ManagerService {
  constructor(private http: HttpClient) {
  }

  getallRoles(): Observable<Role[]> {
    console.log('test');
    return this.http.get(REST_URL + 'signup/allRoles').map(resp => resp as Role[]);
  }

  
  
  
}
