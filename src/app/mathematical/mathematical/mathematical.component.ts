import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathematical',
  templateUrl: './mathematical.component.html',
  styleUrls: ['./mathematical.component.css'],
})
export class MathematicalComponent implements OnInit {
  operators = ['count', 'max', 'min', 'reduce'];
  default = 'Mathematical';
  constructor() {}

  ngOnInit(): void {}
}
