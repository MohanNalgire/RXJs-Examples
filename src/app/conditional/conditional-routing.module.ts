import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConditionalComponent } from './conditional/conditional.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { FindIndexComponent } from './find-index/find-index.component';
import { FindComponent } from './find/find.component';
import { IsEmptyComponent } from './is-empty/is-empty.component';

const routes: Routes = [
  {
    path: 'condition',
    component: ConditionalComponent,
    children: [
      {
        path: 'defaultIfEmpty',
        component: DefaultIfEmptyComponent,
        outlet: 'condition',
      },
      {
        path: 'every',
        component: EveryComponent,
        outlet: 'condition',
      },
      {
        path: 'find',
        component: FindComponent,
        outlet: 'condition',
      },
      {
        path: 'findIndex',
        component: FindIndexComponent,
        outlet: 'condition',
      },
      {
        path: 'isEmpty',
        component: IsEmptyComponent,
        outlet: 'condition',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionalRoutingModule {}
