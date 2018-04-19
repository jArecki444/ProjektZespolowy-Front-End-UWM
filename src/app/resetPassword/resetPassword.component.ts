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

  constructor(private location: Location) {
    var pathString = location.path();
      console.log('appComponent: pathString...');
      console.log(pathString);
   }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

}
