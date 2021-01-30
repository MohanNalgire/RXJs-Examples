import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  operators = [
    'combineAll',
    'concatAll',
    'exhaust',
    'mergeAll',
    'startWith',
    'withLatestFrom',
  ];
  default = 'Join';
  constructor() {}

  ngOnInit(): void {}
}
