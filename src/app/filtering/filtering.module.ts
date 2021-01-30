import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { FilteringComponent } from './filtering/filtering.component';
import { AuditComponent } from './audit/audit.component';
import { AuditTimeComponent } from './audit-time/audit-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctComponent } from './distinct/distinct.component';
import { DistinctKeyComponent } from './distinct-key/distinct-key.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';
import { ElementAtComponent } from './element-at/element-at.component';
import { FilterComponent } from './filter/filter.component';
import { FirstComponent } from './first/first.component';
import { IgnoreElementsComponent } from './ignore-elements/ignore-elements.component';
import { LastComponent } from './last/last.component';
import { SampleComponent } from './sample/sample.component';
import { SampleTimeComponent } from './sample-time/sample-time.component';
import { SingleComponent } from './single/single.component';
import { SkipComponent } from './skip/skip.component';
import { SkipLastComponent } from './skip-last/skip-last.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { TakeComponent } from './take/take.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { ThrottleComponent } from './throttle/throttle.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';


@NgModule({
  declarations: [FilteringComponent, AuditComponent, AuditTimeComponent, DebounceComponent, DebounceTimeComponent, DistinctComponent, DistinctKeyComponent, DistinctUntilChangedComponent, DistinctUntilKeyChangedComponent, ElementAtComponent, FilterComponent, FirstComponent, IgnoreElementsComponent, LastComponent, SampleComponent, SampleTimeComponent, SingleComponent, SkipComponent, SkipLastComponent, SkipUntilComponent, SkipWhileComponent, TakeComponent, TakeLastComponent, TakeUntilComponent, TakeWhileComponent, ThrottleComponent, ThrottleTimeComponent],
  imports: [
    CommonModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
