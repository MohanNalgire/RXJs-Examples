import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastingRoutingModule } from './multicasting-routing.module';

import { MulticastComponent } from './multicast/multicast.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { PublishBehaviorComponent } from './publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './publish-last/publish-last.component';
import { PublishReplayComponent } from './publish-replay/publish-replay.component';
import { PublishComponent } from './publish/publish.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    MulticastComponent,
    MulticastingComponent,
    PublishBehaviorComponent,
    PublishLastComponent,
    PublishReplayComponent,
    PublishComponent,
    ShareComponent,
    PublishBehaviorComponent,
  ],
  imports: [CommonModule, MulticastingRoutingModule],
})
export class MulticastingModule {
  constructor() {}
}
