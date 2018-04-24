import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        {path: 'user', component: UserComponent},
        {path: 'admin', component: AdminComponent},
        {path: 'register', component: RegisterComponent}
      ]
    },
    {path: 'forget_password', component: ForgetPasswordComponent},
    {path: 'nowe_haslo', component: ResetPasswordComponent}
];
