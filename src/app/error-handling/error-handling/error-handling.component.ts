import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorHandlingComponent implements OnInit {
  operators = ['catchError', 'retry', 'retryWhen'];
  default = 'Error Handling';
  constructor() {}

  ngOnInit(): void {}
}
