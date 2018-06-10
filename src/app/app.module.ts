import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { EqualValidator } from './resetPassword/password.match.directive';
import { AuthGuard } from './_guards/auth.guard';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { AgmCoreModule} from '@agm/core';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { RemoteUsersListForUserComponent } from './remoteUsersListForUser/remoteUsersList.component';
import { SlidersModule } from 'angular-precision-sliders';
import { AbsenceListForUserComponent } from './absenceListForUser/absenceListForUser.component';
import { AbsenceListForAdminComponent } from './absenceListForAdmin/absenceListForAdmin.component';
import { RemoteUsersListForAdminComponent } from './remoteUsersListForAdmin/remoteUsersListForAdmin.component';
import { GpsLocationComponent } from './gps-location/gps-location.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    EqualValidator
,
RemoteUsersListForUserComponent
,
    AbsenceListForUserComponent,
    AbsenceListForAdminComponent
,
    RemoteUsersListForAdminComponent,
    GpsLocationComponent,
    ProfileEditComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5ZBj9pPbVAHoFpeYeai_2LyytDazCyJ4'
    }),
    SlidersModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlertifyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
