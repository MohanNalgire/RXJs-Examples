import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinOrCreationRoutingModule } from './join-or-creation-routing.module';
import { JoinOrCreationComponent } from './join-or-creation/join-or-creation.component';


@NgModule({
  declarations: [JoinOrCreationComponent],
  imports: [
    CommonModule,
    JoinOrCreationRoutingModule
  ]
})
export class JoinOrCreationModule { }
