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
  time24h(time12h) {
    const [time, modifier] = time12h.split(' ');

    const [hour, minutes] = time.split(':');
    let hours = hour;
    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return hours + ':' + minutes;
  }
}
