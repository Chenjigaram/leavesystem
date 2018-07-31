import { Leave } from '../beans/leaveBean';
import { Message } from '../beans/messageBean';
import { PopUpDialogComponent } from '../pop-up-dialog/pop-up-dialog.component';
import { LeaveService } from '../services/leaveService';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-leave-dialog',
  templateUrl: './edit-leave-dialog.component.html',
  styleUrls: ['./edit-leave-dialog.component.css']
})
export class EditLeaveDialogComponent {
  
  
 constructor(
    public dialogRef: MatDialogRef<EditLeaveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Leave , private leaveService: LeaveService) {
 
 this.data.startFrom = new Date(this.data.startFrom);
   this.data.endTo = new Date(this.data.endTo);
 
  }

  onNoClick(): void {

    
    this.dialogRef.close();
  }
  
  
  editLeave() {
  this.leaveService.updateLeave(this.data).subscribe(
  res => {
  console.log(res);
    
    this.dialogRef.close(res);
  }
  );
  
  }
  
  deleteLeave() {
  this.leaveService.deleteLeave(this.data).subscribe(
  res => {
  console.log(res);
    this.dialogRef.close(res);
  }
  );
  
  }
  
}
