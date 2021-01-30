import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinOrCreationComponent } from './join-or-creation/join-or-creation.component';
import { MergeComponent } from './merge/merge.component';
import { PartitionComponent } from './partition/partition.component';
import { RaceComponent } from './race/race.component';
import { ZipComponent } from './zip/zip.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';

const routes: Routes = [
  {
    path: 'combine',
    component: JoinOrCreationComponent,
    children: [
      {
        path: 'combineLatest',
        component: CombinelatestComponent,
        outlet: 'combinator',
      },
      {
        path: 'concat',
        component: ConcatComponent,
        outlet: 'combinator',
      },
      {
        path: 'forkJoin',
        component: ForkJoinComponent,
        outlet: 'combinator',
      },
      {
        path: 'merge',
        component: MergeComponent,
        outlet: 'combinator',
      },
      {
        path: 'partition',
        component: PartitionComponent,
        outlet: 'combinator',
      },
      {
        path: 'race',
        component: RaceComponent,
        outlet: 'combinator',
      },
      {
        path: 'zip',
        component: ZipComponent,
        outlet: 'combinator',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinOrCreationRoutingModule {}
