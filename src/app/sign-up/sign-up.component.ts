import { Message } from '../beans/messageBean';
import { Role } from '../beans/roleBean';
import { Team } from '../beans/teamBean';
import { User } from '../beans/userBean';
import { PopUpDialogComponent } from '../pop-up-dialog/pop-up-dialog.component';
import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/signupService';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  allRoles: Role[];
  allTeams: Team[];
  user: User = new User();
  message: Message;
  

 
  constructor(private signupService: SignUpService, private router: Router, public dialog: MatDialog ) { 
  

  this.allRoles = [];
  this.allTeams = [];
 
  }

  ngOnInit() {
    this.signupService.getallRoles().subscribe(
    response => this.allRoles = response
    );
    this.signupService.getallTeams().subscribe(
    response => {this.allTeams = response;
     
    });

     
  }

  openDialog(data): void {
    let dialogRef = this.dialog.open(PopUpDialogComponent, {
      width: '250px',
      data: data
    });

    
  }
  register() {
  
    
  console.log(this.user);
    this.signupService.register(this.user).subscribe(
    res => { this.message = res as Message;
      console.log(this.message);
      if (!this.message.status) {
      this.openDialog(this.message);
      } else {
      this.router.navigate(['/login']);
      }
      
      }
    );
 
  }
  
}
