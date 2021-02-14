import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {
  carSearch$:Observable<any>;
  cars = [
    {
      id: 1,
      brand: 'Ferrari',
      model: 'F40'
    },
    {
      id: 2,
      brand: 'Ferrari',
      model: 'F50'
    },
    {
      id: 3,
      brand: 'Ferrari',
      model: 'California'
    },
    {
      id: 4,
      brand: 'Porsche',
      model: '911'
    },
    {
      id: 5,
      brand: 'Porsche',
      model: 'Panamera'
    }
  ];
  searchResult: { id: number; brand: string; model: string; }[];
  
  constructor() { }

  ngOnInit(): void {
    this.carSearching();
  }

  
  carSearching(){
    fromEvent(document.getElementById('carSearch'),'input')
    .pipe(
      map(event=>{
        // Mapping input event target value
        /* 
        Property 'value' does not exist on type EventTarget in TypeScript
         https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
        */
        return (<HTMLInputElement>event.target).value;
      }),
      filter(query=>{
        /**
         * Checking 0, null, undefined
         *  https://stackoverflow.com/questions/48065557/filterv-v-in-javascript/48065623
         */
        return !!query;
      }),
      debounceTime(10),
      distinctUntilChanged(),
      tap(query=>console.log(`We are searching for `,query)),
      switchMap(query=>{
         return of(this.cars.filter(q=>{
           return `${q.brand} ${q.model}`.toLowerCase().startsWith(query.toLowerCase());
          })).pipe(
            delay(300)
          )
      })
    )
    .subscribe(result=>this.searchResult=result);
  }

}
