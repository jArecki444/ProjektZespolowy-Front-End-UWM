import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { RemoteUser } from '../_models/remoteUser'; // typ listy nieob = liscie os prac zdalnie

@Component({
  selector: 'app-absence-listfor-user',
  templateUrl: './absenceListForUser.component.html',
  styleUrls: ['./absenceListForUser.component.css']
})
export class AbsenceListForUserComponent implements OnInit {
  listaAbsence: RemoteUser; // lista zgloszonych nieobecnosci dla poszczegolnego pracownika
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadAbsenceUsers();
  }

  loadAbsenceUsers() {
    this.userService.getAbsenceForUser().subscribe((listaAbsence: RemoteUser) => {
      this.listaAbsence = listaAbsence;
    });
  }
}
