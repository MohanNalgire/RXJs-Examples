import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join/join.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';

@NgModule({
  declarations: [JoinComponent, CombineAllComponent, ConcatAllComponent, MergeAllComponent, ExhaustComponent, StartWithComponent, WithLatestFromComponent],
  imports: [CommonModule, JoinRoutingModule],
})
export class JoinModule {}
