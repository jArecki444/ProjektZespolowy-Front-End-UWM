import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
    constructor(public authService: AuthService, private userService: UserService, private alertify: AlertifyService) { }

    ngOnInit() {
    }

    edit() {
      this.userService.EditProfile(this.model).subscribe(() => {
        this.alertify.success('Zmieniono dane konta!');
        console.log(this.model);
      }, error => {
        this.alertify.error('Błędne dane formularza!');
      });
    }
  }
