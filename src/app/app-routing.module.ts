import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent},
    {path: 'forget_password', component: ForgetPasswordComponent},
    {path: 'nowe_haslo', component: ResetPasswordComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
  export class AppRoutingModule {

  }
