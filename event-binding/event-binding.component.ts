import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit
{
  formData = 
  {
    username: '',
    password: ''
  };
  sendData(userInput:any)
  {
    console.log(`
    Username : ${userInput}
    `);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
