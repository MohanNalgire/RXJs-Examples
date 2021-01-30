import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.css'],
})
export class TransformationComponent implements OnInit {
  operators = [
    'buffer',
    'bufferCount',
    'bufferTime',
    'bufferToggle',
    'bufferWhen',
    'concatMap',
    'concatMapTo',
    'exhaust',
    'exhaustMap',
    'expand',
    'groupBy',
    'map',
    'mapTo',
    'mergeMap',
    'mergeMapTo',
    'mergeScan',
    'pairwise',
    'partition',
    'pluck',
    'scan',
    'switchMap',
    'switchMapTo',
    'window',
    'windowCount',
    'windowTime',
    'windowToggle',
    'windowWhen',
  ];
  default = 'Trasformation';
  constructor() {}

  ngOnInit(): void {}
}
