import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DelayComponent } from './delay/delay.component';
import { DematerializeComponent } from './dematerialize/dematerialize.component';
import { MaterializeComponent } from './materialize/materialize.component';
import { ObserveOnComponent } from './observe-on/observe-on.component';
import { SubscriptionOnComponent } from './subscription-on/subscription-on.component';
import { TapComponent } from './tap/tap.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';
import { TimeoutWithComponent } from './timeout-with/timeout-with.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [
  {
    path: 'utils',
    component: UtilityComponent,
    children: [
      {
        path: 'tap',
        component: TapComponent,
        outlet: 'utils',
      },
      {
        path: 'delay',
        component: DelayComponent,
        outlet: 'utils',
      },
      {
        path: 'delayWhen',
        component: DelayWhenComponent,
        outlet: 'utils',
      },
      {
        path: 'dematerialize',
        component: DematerializeComponent,
        outlet: 'utils',
      },
      {
        path: 'materialize',
        component: MaterializeComponent,
        outlet: 'utils',
      },
      {
        path: 'observeOn',
        component: ObserveOnComponent,
        outlet: 'utils',
      },
      {
        path: 'subscribeOn',
        component: SubscriptionOnComponent,
        outlet: 'utils',
      },
      {
        path: 'timeInterval',
        component: TimeIntervalComponent,
        outlet: 'utils',
      },
      {
        path: 'timestamp',
        component: TimestampComponent,
        outlet: 'utils',
      },
      {
        path: 'timeout',
        component: TimeoutComponent,
        outlet: 'utils',
      },
      {
        path: 'timeoutWith',
        component: TimeoutWithComponent,
        outlet: 'utils',
      },
      {
        path: 'toArray',
        component: ToArrayComponent,
        outlet: 'utils',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityRoutingModule {}
