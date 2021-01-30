import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  operators = [
    'ajax',
    'bindCallback',
    'bindNodeCallback',
    'defer',
    'empty',
    'from',
    'fromEvent',
    'fromEventPattern',
    'generate',
    'interval',
    'of',
    'range',
    'throwError',
    'timer',
    'iif',
  ];
  default = 'Creation';
  constructor() {}

  ngOnInit(): void {}
}
