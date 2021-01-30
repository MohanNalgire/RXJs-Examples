import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-or-creation',
  templateUrl: './join-or-creation.component.html',
  styleUrls: ['./join-or-creation.component.css'],
})
export class JoinOrCreationComponent implements OnInit {
  operators = [
    'combineLatest',
    'concat',
    'forkJoin',
    'merge',
    'partition',
    'race',
    'zip',
  ];
  default = 'Join Or Combination';
  constructor() {}

  ngOnInit(): void {}
}
