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
import { AdminComponent } from './admin/admin.component';
import { ForgetPasswordComponent } from './ForgetPassword/ForgetPassword.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { EqualValidator } from './resetPassword/password.match.directive';
import { AuthGuard } from './_guards/auth.guard';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { AgmCoreModule} from '@agm/core';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { RemoteUsersListComponent } from './remoteUsersList/remoteUsersList.component';
import { SlidersModule } from 'angular-precision-sliders';

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
    EqualValidator
,
    RemoteUsersListComponent
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
