import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit
{
    isItalic = false;
    buttonText = 'Click me to make text italic';
    
      changeTextStyle() 
      {
        this.isItalic = !this.isItalic;
        this.buttonText = this.isItalic ? 'Text is now italic' : 'Click me to make text italic';
      }

  constructor() { }

  ngOnInit(): void {
  }

}
