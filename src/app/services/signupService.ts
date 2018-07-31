
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
export class SignUpService {
  constructor(private http: HttpClient) {
  }

  getallRoles(): Observable<Role[]> {
    console.log('test');
    return this.http.get(REST_URL + 'signup/allRoles').map(resp => resp as Role[]);
  }

   getallTeams(): Observable<Team[]> {
    return this.http.get(REST_URL + 'signup/allTeams').map(resp => resp as Team[]);
  }
  
  register(user: User): Observable<Message> {
  
   return this.http.post(REST_URL + 'signup/register', user).map(resp => resp as Message);
  
  }
  
  getUser(empId: number): Observable<User> {
  
   return this.http.post(REST_URL + 'signup/getUser', empId).map(resp => resp as User);
  
  }
  
  updateUser(user: User): Observable<Message> {
  
   return this.http.post(REST_URL + 'signup/updateUser', user).map(resp => resp as Message);
  
  }
  
  getTeamNames(username: string): Observable<string[]> {
  
  return this.http.post(REST_URL + 'signup/getTeamNames', username).map(res => res as string[]) ;

  
  }
}
