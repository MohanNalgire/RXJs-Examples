import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css'],
})
export class UtilityComponent implements OnInit {
  operators = [
    'tap',
    'delay',
    'delayWhen',
    'dematerialize',
    'materialize',
    'observeOn',
    'subscribeOn',
    'timeInterval',
    'timestamp',
    'timeout',
    'timeoutWith',
    'toArray',
  ];
  default = 'Utlity';
  constructor() {}

  ngOnInit(): void {}
}
