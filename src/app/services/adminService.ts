
import { Leave } from '../beans/leaveBean';
import { Message } from '../beans/messageBean';
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
export class AdminService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    
    return this.http.get(REST_URL + 'admin/getManReqUsers').map(resp => resp as User[]);
  }

  
  getLeaves(): Observable<Leave[]> {
    
    return this.http.get(REST_URL + 'admin/getManLeaves').map(resp => resp as Leave[]);
  }
  
  saveUser(user: User): Observable<Message> {
  
  return this.http.post(REST_URL + 'admin/saveUser', user).map(resp => resp as Message);
  }
  
  deleteUser(user: User): Observable<Message> {
  
    
    return this.http.post(REST_URL + 'admin/deleteUser', user).map(resp => resp as Message);
  
  }
}
