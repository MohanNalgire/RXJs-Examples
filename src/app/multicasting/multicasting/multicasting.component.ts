import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multicasting',
  templateUrl: './multicasting.component.html',
  styleUrls: ['./multicasting.component.css'],
})
export class MulticastingComponent implements OnInit {
  operators = [
    'multicast',
    'publish',
    'publishBehavior',
    'publishLast',
    'publishReplay',
    'share',
  ];
  default = 'Multicasting';

  constructor() {}

  ngOnInit(): void {}
}
