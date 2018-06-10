import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { RemoteUser } from '../_models/remoteUser';

@Component({
  selector: 'app-remoteusers-listforadmin',
  templateUrl: './remoteUsersListForAdmin.component.html',
  styleUrls: ['./remoteUsersListForAdmin.component.css']
})
export class RemoteUsersListForAdminComponent implements OnInit {
  listaRemote: RemoteUser; // lista użytkownikow pracujących zdalnie
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadRemoteUsers();
  }

  loadRemoteUsers() {
    this.userService.getRemoteUsersForAdmin().subscribe((listaRemote: RemoteUser) => {
      this.listaRemote = listaRemote;
    });
  }
}
