import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
  {
    // use non-empty paths for your top level routes if auxilary(i.e. named) routes exist in a lazy loaded module.
    path: 'error',
    component: ErrorHandlingComponent,
    children: [
      {
        path: 'catchError',
        component: CatchErrorComponent,
        outlet: 'error',
      },
      {
        path: 'retry',
        component: RetryComponent,
        outlet: 'error',
      },
      {
        path: 'retryWhen',
        component: RetryWhenComponent,
        outlet: 'error',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorHandlingRoutingModule {}
