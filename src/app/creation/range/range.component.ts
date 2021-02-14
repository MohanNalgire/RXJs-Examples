import { Component, OnInit } from '@angular/core';
import {range } from 'rxjs';
@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  public rangeData=[];

  constructor() { 
   
  }

  ngOnInit(): void {
     
    range(1,10).subscribe(
      (data) =>{ this.rangeData.push(data);console.log(data)},
      (error)=>console.error(error),
      ()=>console.info('Call completed')
      );
  }



  

}
