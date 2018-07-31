import { LeaveService } from '../services/leaveService';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-approve-leave-dialog',
  templateUrl: './approve-leave-dialog.component.html',
  styleUrls: ['./approve-leave-dialog.component.css']
})
export class ApproveLeaveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ApproveLeaveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private leaveService: LeaveService) { }

  onNoClick(): void {


    this.dialogRef.close();
  }

  ngOnInit() {
  }

  
   accept() {
  this.leaveService.acceptLeave(this.data).subscribe(
  res => {
  console.log(res);
    this.dialogRef.close(res);
  }
  );
  
  }
  
  reject() {
  this.leaveService.rejectLeave(this.data).subscribe(
  res => {
  console.log(res);
    this.dialogRef.close(res);
  }
  );
  
  }
  
  
  
}
