import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { RemoteUser } from '../_models/remoteUser';

@Component({
  selector: 'app-remoteusers-list-foruser',
  templateUrl: './remoteUsersList.component.html',
  styleUrls: ['./remoteUsersList.component.css']
})
export class RemoteUsersListForUserComponent implements OnInit {
  listaRemote: RemoteUser; // lista użytkownikow pracujących zdalnie
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadRemoteUsers();
  }

  loadRemoteUsers() {
    this.userService.getRemoteUsersForUser().subscribe((listaRemote: RemoteUser) => {
      this.listaRemote = listaRemote;
    });
  }
}
