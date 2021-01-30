import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  operators = [
    'audit',
    'auditTime',
    'debounce',
    'debounceTime',
    'distinct',
    'distinctKey',
    'distinctUntilChanged',
    'distinctUntilKeyChanged',
    'elementAt',
    'filter',
    'first',
    'ignoreElements',
    'last',
    'sample',
    'sampleTime',
    'single',
    'skip',
    'skipLast',
    'skipUntil',
    'skipWhile',
    'take',
    'takeLast',
    'takeUntil',
    'takeWhile',
    'throttle',
    'throttleTime',
  ];
  default = 'Filtering';
  constructor() {}

  ngOnInit(): void {}
}
