import { Role } from '../beans/roleBean';
import { Team } from '../beans/teamBean';
import { User } from '../beans/userBean';
import { SignUpService } from '../services/signupService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  allRoles: Role[];
  allTeams: Team[];
  pageLoad: boolean;
  user: User = new User();
  
  
 constructor(private signupService: SignUpService ) { 
  
  this.pageLoad = false;
  this.allRoles = [];
  this.allTeams = [];
 
  }

  ngOnInit() {
    this.signupService.getallRoles().subscribe(
    response => this.allRoles = response
    );
    this.signupService.getallTeams().subscribe(
    response => {this.allTeams = response;
      this.pageLoad = true;
     
    });

     console.log(this.allRoles);
      console.log(this.allRoles);
  }
  
  
  
  update(): void {
  
    this.pageLoad = false;
  console.log(this.user);
    this.signupService.updateUser(this.user).subscribe(
    res => console.log(res)
    );
 
  }
  
  
  getUser(empId: number): void {
  
  this.signupService.getUser(empId).subscribe(
    res => { console.log(res);
      this.user = res;
    }
    );
  
  }
  
}
