import { ApproveLeaveDialogComponent } from '../approve-leave-dialog/approve-leave-dialog.component';
import { Leave } from '../beans/leaveBean';
import { Message } from '../beans/messageBean';
import { User } from '../beans/userBean';
import { EditLeaveDialogComponent } from '../edit-leave-dialog/edit-leave-dialog.component';
import { PopUpDialogComponent } from '../pop-up-dialog/pop-up-dialog.component';
import { LeaveService } from '../services/leaveService';
import { UserService } from '../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  
  myLeaveRequest: Leave[];
  approvalLeaveRequest: Leave[];
  teamLeaveRequest: Leave[];
  messageResponse: Message;
  myLeaveRequestdisplayedColumns = ['startFrom', 'endTo', 'leaveStatus', 'leaveId'];
  matapprovalLeaveRequestdisplayedColumns = ['startFrom', 'endTo', 'leaveStatus', 'user.userName', 'leaveId'];
  matteamLeaveRequestdisplayedColumns = ['startFrom', 'endTo', 'leaveStatus', 'user.userName'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table2', {read: MatPaginator}) paginator_1: MatPaginator;
  @ViewChild('table2', {read: MatSort}) sort_1: MatSort;
   @ViewChild('table3', {read: MatPaginator}) paginator_2: MatPaginator;
  @ViewChild('table3', {read: MatSort}) sort_2: MatSort;
  matmyLeaveRequest: MatTableDataSource<Leave>;
  matapprovalLeaveRequest: MatTableDataSource<Leave>;
  matteamLeaveRequest: MatTableDataSource<Leave>;
  newLeave: Leave;
  
  constructor(private leaveService: LeaveService , public dialog: MatDialog , private userService: UserService) {
  
  this.newLeave = new Leave();
  
  this.getrequests();
  
  
   }

  ngOnInit() {
  }

  openeditDialog(data): void {
    
    
    let dialogRef = this.dialog.open(EditLeaveDialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
      this.messageResponse = result;
    
    if (!this.messageResponse.status) {
      this.openDialog(this.messageResponse);
      } else {
      
      this.resetLeave();
      }
      }
      this.getMyLeaveRequests();
    });
  }
  
   openDialog(data): void {
    let dialogRef = this.dialog.open(PopUpDialogComponent, {
      width: '250px',
      data: data
    });

    
  }
  
  openapprovalDialog(data): void {
    let dialogRef = this.dialog.open(ApproveLeaveDialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.getApprovalLeaveRequests();
    });
  }
  
  addLeave() {
  
  this.newLeave.user = new User();
    this.newLeave.user.userName = this.userService.username;
    console.log(this.newLeave);
  
  this.leaveService.addLeave(this.newLeave).subscribe(
  
  res => {this.messageResponse = res;
    console.log(res);
    if (!this.messageResponse.status) {
      this.openDialog(this.messageResponse);
      } else {
      
      this.resetLeave();
      }
    
    });
  }
  
  resetLeave() {
 
    
  this.newLeave = new Leave();
  }
  
  getMyLeaveRequests() {
  
  this.leaveService.getallMyLeavesReq(this.userService.username).subscribe(
  
  res => {
    
    
  this.myLeaveRequest = res;
    this.matmyLeaveRequest = new MatTableDataSource(this.myLeaveRequest);
    this.matmyLeaveRequest.paginator = this.paginator;
         this.matmyLeaveRequest.sort = this.sort;
  },
    error => {
    
    console.log(error);
    }
  );
  
  }
  
  getApprovalLeaveRequests() {
  if ( !this.userService.roleNames.includes('STANDARD_USER') ) {
  this.leaveService.getallLeavesReq().subscribe(
  
  res => {
  this.approvalLeaveRequest = res;
    console.log(res);
    this.matapprovalLeaveRequest = new MatTableDataSource(this.approvalLeaveRequest);
     this.matapprovalLeaveRequest.paginator = this.paginator_1;
         this.matapprovalLeaveRequest.sort = this.sort_1;
  }
  );
    } else {
  
  this.matapprovalLeaveRequest = new MatTableDataSource([]);
     this.matapprovalLeaveRequest.paginator = this.paginator_1;
         this.matapprovalLeaveRequest.sort = this.sort_1;
  }
  
  }
  
  getTeamLeaveRequest() {
  
  this.leaveService.getTeamLeaves().subscribe(
  
  res => {
  this.teamLeaveRequest = res;
    this.matteamLeaveRequest = new MatTableDataSource(this.teamLeaveRequest);
    this.matteamLeaveRequest.paginator = this.paginator_2;
         this.matteamLeaveRequest.sort = this.sort_2;
  }
  );
  
  }
  
  getrequests() {
  
  this.getTeamLeaveRequest();
  this.getMyLeaveRequests();
  this.getApprovalLeaveRequests();
  }
  
}
