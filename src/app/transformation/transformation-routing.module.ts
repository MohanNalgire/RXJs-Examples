import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartitionComponent } from '../join-or-creation/partition/partition.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { BufferComponent } from './buffer/buffer.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { ExpandComponent } from './expand/expand.component';
import { GroupByComponent } from './group-by/group-by.component';
import { MapToComponent } from './map-to/map-to.component';
import { MapComponent } from './map/map.component';
import { MergeMapToComponent } from './merge-map-to/merge-map-to.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeScanComponent } from './merge-scan/merge-scan.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { PluckComponent } from './pluck/pluck.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapToComponent } from './switch-map-to/switch-map-to.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TransformationComponent } from './transformation/transformation.component';
import { WindowCountComponent } from './window-count/window-count.component';
import { WindowTimeComponent } from './window-time/window-time.component';
import { WindowToggleComponent } from './window-toggle/window-toggle.component';
import { WindowWhenComponent } from './window-when/window-when.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  {
    path: 'trasformer',
    component: TransformationComponent,
    children: [
      {
        path: 'buffer',
        component: BufferComponent,
        outlet: 'transform',
      },
      {
        path: 'bufferCount',
        component: BufferCountComponent,
        outlet: 'transform',
      },
      {
        path: 'bufferTime',
        component: BufferTimeComponent,
        outlet: 'transform',
      },
      {
        path: 'bufferToggle',
        component: BufferToggleComponent,
        outlet: 'transform',
      },
      {
        path: 'bufferWhen',
        component: BufferWhenComponent,
        outlet: 'transform',
      },
      {
        path: 'concatMap',
        component: ConcatMapComponent,
        outlet: 'transform',
      },
      {
        path: 'concatMapTo',
        component: ConcatMapToComponent,
        outlet: 'transform',
      },
      {
        path: 'exhaust',
        component: ExhaustComponent,
        outlet: 'transform',
      },
      {
        path: 'exhaustMap',
        component: ExhaustMapComponent,
        outlet: 'transform',
      },
      {
        path: 'expand',
        component: ExpandComponent,
        outlet: 'transform',
      },
      {
        path: 'groupBy',
        component: GroupByComponent,
        outlet: 'transform',
      },
      {
        path: 'map',
        component: MapComponent,
        outlet: 'transform',
      },
      {
        path: 'mapTo',
        component: MapToComponent,
        outlet: 'transform',
      },
      {
        path: 'mergeMap',
        component: MergeMapComponent,
        outlet: 'transform',
      },
      {
        path: 'mergeMapTo',
        component: MergeMapToComponent,
        outlet: 'transform',
      },
      {
        path: 'mergeScan',
        component: MergeScanComponent,
        outlet: 'transform',
      },
      {
        path: 'pairwise',
        component: PairwiseComponent,
        outlet: 'transform',
      },
      {
        path: 'partition',
        component: PartitionComponent,
        outlet: 'transform',
      },
      {
        path: 'pluck',
        component: PluckComponent,
        outlet: 'transform',
      },
      {
        path: 'scan',
        component: ScanComponent,
        outlet: 'transform',
      },
      {
        path: 'switchMap',
        component: SwitchMapComponent,
        outlet: 'transform',
      },
      {
        path: 'switchMapTo',
        component: SwitchMapToComponent,
        outlet: 'transform',
      },
      {
        path: 'window',
        component: WindowComponent,
        outlet: 'transform',
      },
      {
        path: 'windowCount',
        component: WindowCountComponent,
        outlet: 'transform',
      },
      {
        path: 'windowTime',
        component: WindowTimeComponent,
        outlet: 'transform',
      },
      {
        path: 'windowToggle',
        component: WindowToggleComponent,
        outlet: 'transform',
      },
      {
        path: 'windowWhen',
        component: WindowWhenComponent,
        outlet: 'transform',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformationRoutingModule {}
