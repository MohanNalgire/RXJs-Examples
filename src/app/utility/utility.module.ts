import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';
import { TapComponent } from './tap/tap.component';
import { DelayComponent } from './delay/delay.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DematerializeComponent } from './dematerialize/dematerialize.component';
import { ObserveOnComponent } from './observe-on/observe-on.component';
import { SubscriptionOnComponent } from './subscription-on/subscription-on.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { TimeoutWithComponent } from './timeout-with/timeout-with.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { MaterializeComponent } from './materialize/materialize.component';
import { UtilityComponent } from './utility/utility.component';


@NgModule({
  declarations: [TapComponent, DelayComponent, DelayWhenComponent, DematerializeComponent, ObserveOnComponent, SubscriptionOnComponent, TimeIntervalComponent, TimestampComponent, TimeoutComponent, TimeoutWithComponent, ToArrayComponent, MaterializeComponent, UtilityComponent],
  imports: [
    CommonModule,
    UtilityRoutingModule
  ]
})
export class UtilityModule { }
