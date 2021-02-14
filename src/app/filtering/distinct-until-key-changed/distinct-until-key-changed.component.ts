import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { fromEvent, of } from 'rxjs';
import { distinctUntilKeyChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.css']
})
export class DistinctUntilKeyChangedComponent implements OnInit {
  tasks = [
    {
      id: 1,
      title: 'task1',
      status: 'done'
    },
    {
      id: 2,
      title: 'task2',
      status: 'inprogres'
    },
    {
      id: 3,
      title: 'task3',
      status: 'complete'
    },
    {
      id: 4,
      title: 'task4',
      status: 'assigned'
    },
    {
      id: 5,
      title: 'task5',
      status: 'assigned'
    }
  ];
  distinctStatuses=[];
  constructor() {
    
   }

  ngOnInit(): void {
    /**
     *    distinctUntilKeyChanged - To filter distinct status from the array data
     *    pluck - To fetch only status column data from array data
     */
    from(this.tasks)
        .pipe(
          distinctUntilKeyChanged('status'),
          pluck('status'),
        ).subscribe(
          data=>{
            console.log('test on load', data);
            this.distinctStatuses.push(data);
          }
        );

  }

}
