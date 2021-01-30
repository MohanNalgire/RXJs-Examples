import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjaxComponent } from './ajax/ajax.component';
import { BindCallbackComponent } from './bind-callback/bind-callback.component';
import { BindNodeCallbackComponent } from './bind-node-callback/bind-node-callback.component';
import { CreationComponent } from './creation.component';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';
import { FromEventPatternComponent } from './from-event-pattern/from-event-pattern.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromComponent } from './from/from.component';
import { GenerateComponent } from './generate/generate.component';
import { IifComponent } from './iif/iif.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: 'creators',
    component: CreationComponent,
    children: [
      {
        path: 'ajax',
        component: AjaxComponent,
        outlet: 'create',
      },
      {
        path: 'bindCallback',
        component: BindCallbackComponent,
        outlet: 'create',
      },
      {
        path: 'bindNodeCallback',
        component: BindNodeCallbackComponent,
        outlet: 'create',
      },
      {
        path: 'defer',
        component: DeferComponent,
        outlet: 'create',
      },
      {
        path: 'empty',
        component: EmptyComponent,
        outlet: 'create',
      },
      {
        path: 'from',
        component: FromComponent,
        outlet: 'create',
      },
      {
        path: 'fromEvent',
        component: FromEventComponent,
        outlet: 'create',
      },
      {
        path: 'fromEventPattern',
        component: FromEventPatternComponent,
        outlet: 'create',
      },
      {
        path: 'generate',
        component: GenerateComponent,
        outlet: 'create',
      },
      {
        path: 'interval',
        component: IntervalComponent,
        outlet: 'create',
      },
      {
        path: 'of',
        component: OfComponent,
        outlet: 'create',
      },
      {
        path: 'range',
        component: RangeComponent,
        outlet: 'create',
      },
      {
        path: 'throwError',
        component: ThrowErrorComponent,
        outlet: 'create',
      },
      {
        path: 'timer',
        component: TimerComponent,
        outlet: 'create',
      },
      {
        path: 'iif',
        component: IifComponent,
        outlet: 'create',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
