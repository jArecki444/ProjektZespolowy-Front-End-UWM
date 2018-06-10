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
  }
