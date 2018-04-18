import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { EqualValidator } from './resetPassword/password.match.directive';
import { NoweHasloComponent } from './NoweHaslo/NoweHaslo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    EqualValidator,
    NoweHasloComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
