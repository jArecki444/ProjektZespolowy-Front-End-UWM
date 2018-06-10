import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { RemoteUser } from '../_models/remoteUser'; // typ listy nieob = liscie os prac zdalnie

@Component({
  selector: 'app-absencelist-foradmin',
  templateUrl: './absenceListForAdmin.component.html',
  styleUrls: ['./absenceListForAdmin.component.css']
})
export class AbsenceListForAdminComponent implements OnInit {
    listaAbsence: RemoteUser; // lista wszystkich zgloszonych nieobecnosci dla admina
    constructor(private userService: UserService) { }

    ngOnInit() {
      this.loadAbsenceUsers();
    }
    loadAbsenceUsers() {
      this.userService.getAbsenceForAdmin().subscribe((listaAbsence: RemoteUser) => {
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
