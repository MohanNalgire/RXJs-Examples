import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditTimeComponent } from './audit-time/audit-time.component';
import { AuditComponent } from './audit/audit.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DistinctKeyComponent } from './distinct-key/distinct-key.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';
import { DistinctComponent } from './distinct/distinct.component';
import { ElementAtComponent } from './element-at/element-at.component';
import { FilterComponent } from './filter/filter.component';
import { FilteringComponent } from './filtering/filtering.component';
import { FirstComponent } from './first/first.component';
import { IgnoreElementsComponent } from './ignore-elements/ignore-elements.component';
import { LastComponent } from './last/last.component';
import { SampleTimeComponent } from './sample-time/sample-time.component';
import { SampleComponent } from './sample/sample.component';
import { SingleComponent } from './single/single.component';
import { SkipLastComponent } from './skip-last/skip-last.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { SkipComponent } from './skip/skip.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeComponent } from './take/take.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { ThrottleComponent } from './throttle/throttle.component';

const routes: Routes = [
  {
    path: 'filters',
    component: FilteringComponent,
    children: [
      {
        path: 'audit',
        component: AuditComponent,
        outlet: 'filters',
      },
      {
        path: 'auditTime',
        component: AuditTimeComponent,
        outlet: 'filters',
      },
      {
        path: 'debounce',
        component: DebounceComponent,
        outlet: 'filters',
      },
      {
        path: 'debounceTime',
        component: DebounceTimeComponent,
        outlet: 'filters',
      },
      {
        path: 'distinct',
        component: DistinctComponent,
        outlet: 'filters',
      },
      {
        path: 'distinctKey',
        component: DistinctKeyComponent,
        outlet: 'filters',
      },
      {
        path: 'distinctUntilChanged',
        component: DistinctUntilChangedComponent,
        outlet: 'filters',
      },
      {
        path: 'distinctUntilKeyChanged',
        component: DistinctUntilKeyChangedComponent,
        outlet: 'filters',
      },
      {
        path: 'elementAt',
        component: ElementAtComponent,
        outlet: 'filters',
      },
      {
        path: 'filter',
        component: FilterComponent,
        outlet: 'filters',
      },
      {
        path: 'first',
        component: FirstComponent,
        outlet: 'filters',
      },
      {
        path: 'ignoreElements',
        component: IgnoreElementsComponent,
        outlet: 'filters',
      },
      {
        path: 'last',
        component: LastComponent,
        outlet: 'filters',
      },
      {
        path: 'sample',
        component: SampleComponent,
        outlet: 'filters',
      },
      {
        path: 'sampleTime',
        component: SampleTimeComponent,
        outlet: 'filters',
      },
      {
        path: 'single',
        component: SingleComponent,
        outlet: 'filters',
      },
      {
        path: 'skip',
        component: SkipComponent,
        outlet: 'filters',
      },
      {
        path: 'skipLast',
        component: SkipLastComponent,
        outlet: 'filters',
      },
      {
        path: 'skipUntil',
        component: SkipUntilComponent,
        outlet: 'filters',
      },
      {
        path: 'skipWhile',
        component: SkipWhileComponent,
        outlet: 'filters',
      },
      {
        path: 'take',
        component: TakeComponent,
        outlet: 'filters',
      },
      {
        path: 'takeLast',
        component: TakeLastComponent,
        outlet: 'filters',
      },
      {
        path: 'takeUntil',
        component: TakeUntilComponent,
        outlet: 'filters',
      },
      {
        path: 'takeWhile',
        component: TakeWhileComponent,
        outlet: 'filters',
      },
      {
        path: 'throttle',
        component: ThrottleComponent,
        outlet: 'filters',
      },
      {
        path: 'throttleTime',
        component: ThrottleTimeComponent,
        outlet: 'filters',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteringRoutingModule {}
