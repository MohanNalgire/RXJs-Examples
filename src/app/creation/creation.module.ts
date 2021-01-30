import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from './creation.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BindCallbackComponent } from './bind-callback/bind-callback.component';
import { BindNodeCallbackComponent } from './bind-node-callback/bind-node-callback.component';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromEventPatternComponent } from './from-event-pattern/from-event-pattern.component';
import { GenerateComponent } from './generate/generate.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { TimerComponent } from './timer/timer.component';
import { IifComponent } from './iif/iif.component';
import { CreationRoutingModule } from './creation-routing.module';

@NgModule({
  declarations: [
    CreationComponent,
    AjaxComponent,
    BindCallbackComponent,
    BindNodeCallbackComponent,
    DeferComponent,
    EmptyComponent,
    FromComponent,
    FromEventComponent,
    FromEventPatternComponent,
    GenerateComponent,
    IntervalComponent,
    OfComponent,
    RangeComponent,
    ThrowErrorComponent,
    TimerComponent,
    IifComponent,
  ],
  imports: [CommonModule, CreationRoutingModule],
})
export class CreationModule {}
