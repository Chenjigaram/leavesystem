import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
   MatAutocompleteModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule
  
} from '@angular/material';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SignUpService } from './services/signupService';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { HomeComponent } from './home/home.component';
import { AppDataService } from './services/app-data.service';
import { TOKEN_NAME } from './services/auth.constant';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { LeaveComponent } from './leave/leave.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuard } from './guards/admin-auth-guard.service';
import { LeadAuthGuard } from './guards/lead-auth-guard.service';
import { ManagerAuthGuard } from './guards/manager-auth-guard.service';
import { LeadComponent } from './lead/lead.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminService } from './services/adminService';
import { AccessRequestService } from './services/accessRequestService';
import { LeaveService } from './services/leaveService';
import { ManagerService } from './services/managerService';
import { DialogComponent } from './dialog/dialog.component';

import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { AccessRequestComponent } from './access-request/access-request.component';
import { Interceptor } from './app.interceptor';
import { EditLeaveDialogComponent } from './edit-leave-dialog/edit-leave-dialog.component';
import { ApproveLeaveDialogComponent } from './approve-leave-dialog/approve-leave-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PopUpDialogComponent } from './pop-up-dialog/pop-up-dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    LeaveComponent,
    AdminComponent,
    LeadComponent,
    ManagerComponent,
    DialogComponent,
    LeaveRequestComponent,
    AccessRequestComponent,
    EditLeaveDialogComponent,
    ApproveLeaveDialogComponent,
    EditUserComponent,
    PopUpDialogComponent
   
  ],
  entryComponents: [DialogComponent, EditLeaveDialogComponent, ApproveLeaveDialogComponent, PopUpDialogComponent],
  imports: [
    BrowserModule, routing, 
    BrowserAnimationsModule,
    FormsModule, HttpClientModule, MatNativeDateModule, ReactiveFormsModule, MatAutocompleteModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor,
    multi : true}, ManagerService , 
    AccessRequestService , LeaveService , AdminService ,
    SignUpService, AuthGuard, UserService, AuthenticationService , AppDataService , AdminAuthGuard , ManagerAuthGuard , LeadAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
