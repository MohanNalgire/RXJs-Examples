import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathematicalRoutingModule } from './mathematical-routing.module';
import { CountComponent } from './count/count.component';
import { ReduceComponent } from './reduce/reduce.component';
import { MaxComponent } from './max/max.component';
import { MinComponent } from './min/min.component';
import { MathematicalComponent } from './mathematical/mathematical.component';

@NgModule({
  declarations: [CountComponent, ReduceComponent, MaxComponent, MinComponent, MathematicalComponent],
  imports: [CommonModule, MathematicalRoutingModule],
})
export class MathematicalModule {}
