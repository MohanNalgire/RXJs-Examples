import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  categories = [
    // We are calling lazy loaded module with its name to handle angular bug
    // Bug --> lazy loaded auxillary(https://github.com/angular/angular/issues/10981#issuecomment-301787482)
    {
      title: 'Creation',
      path: 'creation/creators',
    },
    {
      title: 'Mathematical',
      path: 'mathematical/math',
    },
    {
      title: 'Join or Combination',
      path: 'joinorcombination/combine',
    },
    {
      title: 'Join',
      path: 'join/joiner',
    },
    {
      title: 'Transformation',
      path: 'transformation/trasformer',
    },
    {
      title: 'Filtering',
      path: 'filtering/filters',
    },
    {
      title: 'Utility',
      path: 'utility/utils',
    },
    {
      title: 'Conditional',
      path: 'conditional/condition',
    },
    {
      title: 'Multicasting',
      path: 'multicasting/multicaster',
    },
    {
      title: 'Error handling',
      path: 'errorhandling/error',
    },
  ];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
