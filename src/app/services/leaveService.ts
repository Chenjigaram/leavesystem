
import { Leave } from '../beans/leaveBean';
import { Message } from '../beans/messageBean';
import { RoleANDTeam } from '../beans/roleAndTeambean';
import { Role } from '../beans/roleBean';
import { Team } from '../beans/teamBean';
import { User } from '../beans/userBean';
import {Injectable} from '@angular/core';
import {REST_URL, USER_NAME} from '../services/auth.constant';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class LeaveService {
  
  roleandteam: RoleANDTeam;
  
  constructor(private http: HttpClient , private userService: UserService, private router: Router) {
    
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

  getallLeavesReq(): Observable<Leave[]> {
    
    
    return this.http.post(REST_URL + 'leavesRequest/getallApprovalLeavesReq', this.roleandteam).map(resp => resp as Leave[]);
  }

  getallMyLeavesReq(userName: string): Observable<Leave[]> {
    
    
    return this.http.post(REST_URL + 'leavesRequest/getallMyLeavesReq', userName).map(resp => resp as Leave[]);
  }

  
  updateLeave(leaves: Leave): Observable<Message> {
  leaves.leaveStatus = 'Applied';
  return this.http.post(REST_URL + 'leavesRequest/updateLeave', leaves).map(resp => resp as Message);
  
  }
  
  acceptLeave(leaves: Leave): Observable<Message> {
  leaves.leaveStatus = 'Approved';
  return this.http.post(REST_URL + 'leavesRequest/updateLeave', leaves).map(resp => resp as Message);
  
  }
  
  rejectLeave(leaves: Leave): Observable<Message> {
  leaves.leaveStatus = 'Rejected';
  return this.http.post(REST_URL + 'leavesRequest/updateLeave', leaves).map(resp => resp as Message);
  
  }
  
  deleteLeave(leaves: Leave): Observable<Message> {
  
  return this.http.post(REST_URL + 'leavesRequest/deleteLeave', leaves).map(resp => resp as Message);
  
  }
  
  addLeave(leaves: Leave): Observable<Message> {
  
  return this.http.post(REST_URL + 'leavesRequest/addLeave', leaves).map(resp => resp as Message);
  
  }
  
  getTeamLeaves(): Observable<Leave[]> {
    
    
    return this.http.post(REST_URL + 'leavesRequest/getallTeamLeavesReq/' + sessionStorage.getItem(USER_NAME) 
      , this.roleandteam).map(resp => resp as Leave[]);
  }
  
  
}
