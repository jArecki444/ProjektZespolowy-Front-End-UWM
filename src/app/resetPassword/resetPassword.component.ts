import { Component, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Password } from './password';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css']
})
export class ResetPasswordComponent {

  model = new Password('', '');
  submitted = false;
  pathString: any;      // Ścieżka z linku
  id: any;              // ID
  kod: any;             // code

  constructor(private location: Location) {
      this.pathString = location.path();                    // Arecki inicjuje ścieżkę z neta
      console.log('appComponent: pathString...');           // Console.log XDDD Arecki robi na oślep ale punkt za wyciągnięcie ścieżki! 
      var papa = this.pathString;                           // Ścieżke do zmiennej LOKALNEJ przypisuje (łatwiej się pracuje podczas modyfikacji stringu)
      var liczba1 = papa.indexOf('=');                      // Ścieżka jest charakterystyczna, posiada dwa znaki '=' dlatego szukam pozycje pierwszego z nich
      var liczba2 = papa.indexOf('&');                      // Szukam pozycji '&' ponieważ na tym kończy mi się id użytwkownika
      var _liczba1 = papa.indexOf('=', liczba1 + 1);        // Szukam kolejnej pozycji znaku '='
      this.id = papa.substring(liczba1 + 1, liczba2);       // wyciągam id użytkownika przycinając ścieżkę
      this.kod = papa.substring(_liczba1 + 1, );            // wyciagam kod użytkownika
      console.log('ID użytkownika: ' + this.id);      
      console.log('Kod użytkownika: ' + this.kod);
   }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

}
