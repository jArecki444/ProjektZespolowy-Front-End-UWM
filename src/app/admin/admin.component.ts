import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public basicSliderVal: number;
  model: any = {};
  coordinateX = 53.764125;
  coordinateY = 20.520342;
  radius = this.basicSliderVal; // promień w metrach
  fillColor = 'blue';
  name: any;

  constructor(private authService: AuthService) { }

  onChooseLocation(event) {
    console.log(event);
    this.coordinateX = event.coords.lat;
    this.coordinateY = event.coords.lng;
  }
  updateGpsLocation() {
    this.model.coordinateX = this.coordinateX; // te 3 pola uzupelniam
    this.model.coordinateY = this.coordinateY; // tutaj bo uzytkownik nie podaje
    this.model.radius = this.radius;           // tych pol recznie tylko zaciagane sa z markera
    this.authService.updateGpsLocation(this.model).subscribe(() => {
      console.log('Aktualizacja danych gps wykonana!');
      console.log(this.model);
    }, error => {
      console.log(error);
    });
  }

  onBasicValueChange(value: number) {
    this.radius = Math.round(value);
  }

  ngOnInit() {
  }

}
