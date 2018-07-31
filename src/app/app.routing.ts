import { AccessRequestComponent } from './access-request/access-request.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuard } from './guards/admin-auth-guard.service';
import { AuthGuard } from './guards/auth-guard.service';
import { LeadAuthGuard } from './guards/lead-auth-guard.service';
import { ManagerAuthGuard } from './guards/manager-auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'access', component: AccessRequestComponent , canActivate: [AuthGuard]},
    { path: 'manager', component: ManagerComponent , canActivate: [AuthGuard , ManagerAuthGuard]},
    { path: 'lead', component: LeadComponent , canActivate: [AuthGuard , LeadAuthGuard]},
    { path: 'leave', component: LeaveComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignUpComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
