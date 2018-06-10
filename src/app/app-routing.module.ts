import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RemoteUsersListForUserComponent } from './remoteUsersListForUser/remoteUsersList.component';
import { AbsenceListForUserComponent } from './absenceListForUser/absenceListForUser.component';
import { AbsenceListForAdminComponent } from './absenceListForAdmin/absenceListForAdmin.component';
import { RemoteUsersListForAdminComponent } from './remoteUsersListForAdmin/remoteUsersListForAdmin.component';
import { GpsLocationComponent } from './gps-location/gps-location.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        {path: 'user', component: UserComponent},
        {path: 'remoteForuser', component: RemoteUsersListForUserComponent},
        {path: 'remoteForadmin', component: RemoteUsersListForAdminComponent},
        {path: 'absenceforUser', component: AbsenceListForUserComponent},
        {path: 'absenceforAdmin', component: AbsenceListForAdminComponent},
        {path: 'gpslocation', component: GpsLocationComponent},
        {path: 'editprofile', component: ProfileEditComponent},
        {path: 'register', component: RegisterComponent}
      ]
    },
    {path: 'forget_password', component: ForgetPasswordComponent},
    {path: 'nowe_haslo', component: ResetPasswordComponent}
];
