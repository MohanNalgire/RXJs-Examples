import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { TransformationComponent } from './transformation/transformation.component';
import { WindowWhenComponent } from './window-when/window-when.component';
import { WindowToggleComponent } from './window-toggle/window-toggle.component';
import { WindowTimeComponent } from './window-time/window-time.component';
import { WindowCountComponent } from './window-count/window-count.component';
import { WindowComponent } from './window/window.component';
import { SwitchMapToComponent } from './switch-map-to/switch-map-to.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ScanComponent } from './scan/scan.component';
import { PluckComponent } from './pluck/pluck.component';
import { PartitionComponent } from './partition/partition.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { MergeScanComponent } from './merge-scan/merge-scan.component';
import { MergeMapToComponent } from './merge-map-to/merge-map-to.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MapToComponent } from './map-to/map-to.component';
import { MapComponent } from './map/map.component';
import { GroupByComponent } from './group-by/group-by.component';
import { ExpandComponent } from './expand/expand.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { BufferToggleComponent } from './buffer-toggle/buffer-toggle.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferComponent } from './buffer/buffer.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';

@NgModule({
  declarations: [
    TransformationComponent,
    WindowWhenComponent,
    WindowToggleComponent,
    WindowTimeComponent,
    WindowCountComponent,
    WindowComponent,
    SwitchMapToComponent,
    SwitchMapComponent,
    ScanComponent,
    PluckComponent,
    PartitionComponent,
    PairwiseComponent,
    MergeScanComponent,
    MergeMapToComponent,
    MergeMapComponent,
    MapToComponent,
    MapComponent,
    GroupByComponent,
    ExpandComponent,
    ExhaustComponent,
    ExhaustMapComponent,
    ConcatMapComponent,
    BufferWhenComponent,
    BufferToggleComponent,
    BufferTimeComponent,
    BufferCountComponent,
    BufferComponent,
    ConcatMapToComponent,
  ],
  imports: [CommonModule, TransformationRoutingModule],
})
export class TransformationModule {}
