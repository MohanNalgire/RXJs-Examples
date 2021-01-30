import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';
import { MathematicalComponent } from './mathematical/mathematical.component';
import { MaxComponent } from './max/max.component';
import { MinComponent } from './min/min.component';
import { ReduceComponent } from './reduce/reduce.component';

const routes: Routes = [
  {
    path: 'math',
    component: MathematicalComponent,
    children: [
      {
        path: 'count',
        component: CountComponent,
        outlet: 'math',
      },
      {
        path: 'min',
        component: MinComponent,
        outlet: 'math',
      },
      {
        path: 'max',
        component: MaxComponent,
        outlet: 'math',
      },
      {
        path: 'reduce',
        component: ReduceComponent,
        outlet: 'math',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathematicalRoutingModule {}
