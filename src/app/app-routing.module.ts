import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';

const appRoutes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'forget_password', component: ForgetPasswordComponent},
    {path: 'reset_password', component: ResetPasswordComponent}
];
@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
