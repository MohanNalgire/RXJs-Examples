import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { ConditionalComponent } from './conditional/conditional.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { FindComponent } from './find/find.component';
import { FindIndexComponent } from './find-index/find-index.component';
import { IsEmptyComponent } from './is-empty/is-empty.component';


@NgModule({
  declarations: [ConditionalComponent, DefaultIfEmptyComponent, EveryComponent, FindComponent, FindIndexComponent, IsEmptyComponent],
  imports: [
    CommonModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
