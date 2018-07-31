
import {Message} from '../beans/messageBean';
import {RoleANDTeam} from '../beans/roleAndTeambean';
import {Role} from '../beans/roleBean';
import {Team} from '../beans/teamBean';
import {User} from '../beans/userBean';
import {Injectable, OnInit} from '@angular/core';
import {REST_URL, ROLE_NAMES, TEAM_NAMES} from '../services/auth.constant';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AccessRequestService {
  roleandteam: RoleANDTeam;





  constructor(private http: HttpClient, private userService: UserService, private router: Router) {




    this.roleandteam = new RoleANDTeam();

    this.roleandteam.roleNames = this.userService.getroleNames();
    if (!this.roleandteam.roleNames) {

      this.router.navigate(['/login']);

    }

    this.roleandteam.teamNames = this.userService.getTeamNames();
    if (!this.roleandteam.teamNames) {

      this.router.navigate(['/login']);

    }


  }

  getallRequests(): Observable<User[]> {



    return this.http.post(REST_URL + 'accessRequest/getaccessRequests', this.roleandteam).map(resp => resp as User[]);
  }


  updateUser(user: User): Observable<Message> {

    return this.http.post(REST_URL + 'accessRequest/updateUser', user).map(resp => resp  as Message);

  }

  rejectUser(user: User): Observable<Message> {

    return this.http.post(REST_URL + 'accessRequest/rejectUser', user).map(resp => resp as Message);

  }

  deleteUser(user: User): Observable<Message> {

    return this.http.post(REST_URL + 'accessRequest/deleteUser', user).map(resp => resp as Message);

  }

}
