import { Leave } from '../beans/leaveBean';
import { Message } from '../beans/messageBean';
import { User } from '../beans/userBean';
import { AdminService } from '../services/adminService';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  reqUsers: User[];
  leavesList: Leave[];
  messageResponse: Message;
  displayedColumns = ['First Name', 'User Name', 'Employee ID', 'Accept/Reject'];
  matreqUsers: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  getReqUsers() {
  
  this.adminService.getUsers().subscribe(
    response => { this.reqUsers = response;
      this.matreqUsers = new MatTableDataSource(this.reqUsers);
      
    }
    );
  
  }
  
  getleaves() {
  
  this.adminService.getLeaves().subscribe(
    response => this.leavesList = response
    );
  }
  
  updateUser( user: User) {
  
  this.adminService.saveUser(user).subscribe( 
    response => { this.messageResponse = response;
      console.log(response); 
    }
    
    );
  }
  
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); 
    this.matreqUsers.filter = filterValue;
  }
  
  
  ngAfterViewInit() {
    
    this.matreqUsers.paginator = this.paginator;
    this.matreqUsers.sort = this.sort;
  }
  
}
