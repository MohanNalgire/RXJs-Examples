import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryComponent } from './retry/retry.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';


@NgModule({
  declarations: [ErrorHandlingComponent, CatchErrorComponent, RetryComponent, RetryWhenComponent],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ]
})
export class ErrorHandlingModule { }
