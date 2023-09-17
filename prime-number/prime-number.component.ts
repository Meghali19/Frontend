import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result:boolean | null= null;

  isPrimeNumber(num:string){
    const actualNumber:number = parseInt(num);
    if(actualNumber<=1){
      this.result =  false;
    }else{
      for(let i:number=2;i<actualNumber/2;i++){
        if(actualNumber%i==0){
          this.result =  false;
          return;
        }
      }
      this.result = true;
    }
    
  }

}
