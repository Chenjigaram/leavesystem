import {Injectable} from '@angular/core';


import {TOKEN_NAME, REST_URL, TEAM_NAMES, ROLE_NAMES, USER_NAME} from '../services/auth.constant';
import { SignUpService } from './signupService';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserService {  
  jwtHelper: JwtHelperService = new JwtHelperService();

  accessToken: string;
  isAdmin: boolean;
  isManager: boolean;
  isLead: boolean;
  roleNames: string[]; 
  teamNames: string[]; 
  username: string;
  constructor(private http: HttpClient) {
   
   if (sessionStorage.getItem(ROLE_NAMES)) {
    
   
    this.roleNames = JSON.parse(sessionStorage.getItem(ROLE_NAMES));
    }
    if (sessionStorage.getItem(TEAM_NAMES)) {
    
    this.teamNames = JSON.parse(sessionStorage.getItem(TEAM_NAMES));
    
    }
     if (sessionStorage.getItem(USER_NAME)) {
    
    this.username = sessionStorage.getItem(USER_NAME);
    
    } else {
     
     this.username = 'Buddy';
     }
      
    
  }

  login(accessToken: string, username: string) {
   
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
   
     sessionStorage.setItem(USER_NAME, username);
    this.roleNames = decodedToken.authorities;
    if (this.roleNames) {
        this.setroleNames(username);
    }
   
    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.isManager = decodedToken.authorities.some(el => el === 'MANAGER_USER');
    this.isLead = decodedToken.authorities.some(el => el === 'LEAD_USER');
    this.accessToken = accessToken;
    localStorage.setItem(TOKEN_NAME, accessToken);
     this.username = username;
    
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
    sessionStorage.removeItem(ROLE_NAMES);
    sessionStorage.removeItem(TEAM_NAMES);
    sessionStorage.removeItem(USER_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
  isManagerUser(): boolean {
    return this.isManager;
  }
  isLeadUser(): boolean {
    return this.isLead;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
  
  getroleNames(): string[] {
  
  return this.roleNames;
  }
  
  
  setteamNames(userName: string) {

     this.http.post(REST_URL + 'account/getTeamNames', userName).subscribe(res => { this.teamNames = res as string[] ;
     
     sessionStorage.setItem(TEAM_NAMES, JSON.stringify(this.teamNames));
     
     });
  }
  
  getTeamNames(): string[] {
   
  return this.teamNames;
    
    
  }
  setroleNames(userName: string) {
    
     this.http.post(REST_URL + 'account/getRoleNames', userName).subscribe(res => { this.roleNames = res as string[] ;
     
     sessionStorage.setItem(ROLE_NAMES, JSON.stringify(this.roleNames));
     
     });
  }
 
}
