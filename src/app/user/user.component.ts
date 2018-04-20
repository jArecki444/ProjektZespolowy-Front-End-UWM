import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lista: any = {};        // lista użytkownikow

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.lista = this.authService.GetUsers().subscribe(users => this.lista = users);
  }
}
