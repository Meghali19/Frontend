import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit 
{
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Form is valid, perform authentication or other actions here
      console.log('Form submitted with valid data');
    } else {
      // Form is invalid, show error messages
      console.log('Form submitted with invalid data');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
