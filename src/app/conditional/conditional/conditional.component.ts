import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css'],
})
export class ConditionalComponent implements OnInit {
  operators = ['defaultIfEmpty', 'every', 'find', 'findIndex', 'isEmpty'];
  default = 'Conditional';
  constructor() {}

  ngOnInit(): void {}
}
