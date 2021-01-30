import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MulticastComponent } from './multicast/multicast.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { PublishBehaviorComponent } from './publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './publish-last/publish-last.component';
import { PublishReplayComponent } from './publish-replay/publish-replay.component';
import { PublishComponent } from './publish/publish.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  {
    path: 'multicaster',
    component: MulticastingComponent,
    children: [
      {
        path: 'multicast',
        component: MulticastComponent,
        outlet: 'multicast',
      },
      {
        path: 'publish',
        component: PublishComponent,
        outlet: 'multicast',
      },
      {
        path: 'publishBehavior',
        component: PublishBehaviorComponent,
        outlet: 'multicast',
      },
      {
        path: 'publishLast',
        component: PublishLastComponent,
        outlet: 'multicast',
      },
      {
        path: 'publishReplay',
        component: PublishReplayComponent,
        outlet: 'multicast',
      },
      {
        path: 'share',
        component: ShareComponent,
        outlet: 'multicast',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulticastingRoutingModule {}
