import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineAll } from 'rxjs/operators';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { JoinComponent } from './join/join.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';

const routes: Routes = [
  {
    path: 'joiner',
    component: JoinComponent,
    children: [
      {
        path: 'combineAll',
        component: CombineAllComponent,
      },
      {
        path: 'concatAll',
        component: ConcatAllComponent,
        outlet: 'join',
      },
      {
        path: 'exhaust',
        component: ExhaustComponent,
        outlet: 'join',
      },
      {
        path: 'mergeAll',
        component: MergeAllComponent,
        outlet: 'join',
      },
      {
        path: 'startWith',
        component: StartWithComponent,
        outlet: 'join',
      },
      {
        path: 'withLatestFrom',
        component: WithLatestFromComponent,
        outlet: 'join',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinRoutingModule {}
