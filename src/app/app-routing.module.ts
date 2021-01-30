import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'creation',
    loadChildren: () =>
      import('./creation/creation.module').then((m) => m.CreationModule),
  },
  {
    path: 'mathematical',
    loadChildren: () =>
      import('./mathematical/mathematical.module').then(
        (m) => m.MathematicalModule
      ),
  },
  {
    path: 'joinorcombination',
    loadChildren: () =>
      import('./join-or-creation/join-or-creation.module').then(
        (m) => m.JoinOrCreationModule
      ),
  },
  {
    path: 'join',
    loadChildren: () => import('./join/join.module').then((m) => m.JoinModule),
  },
  {
    path: 'transformation',
    loadChildren: () =>
      import('./transformation/transformation.module').then(
        (m) => m.TransformationModule
      ),
  },
  {
    path: 'filtering',
    loadChildren: () =>
      import('./filtering/filtering.module').then((m) => m.FilteringModule),
  },
  {
    path: 'utility',
    loadChildren: () =>
      import('./utility/utility.module').then((m) => m.UtilityModule),
  },
  {
    path: 'conditional',
    loadChildren: () =>
      import('./conditional/conditional.module').then(
        (m) => m.ConditionalModule
      ),
  },
  {
    path: 'multicasting',
    loadChildren: () =>
      import('./multicasting/multicasting.module').then(
        (m) => m.MulticastingModule
      ),
  },
  {
    path: 'errorhandling',
    loadChildren: () =>
      import('./error-handling/error-handling.module').then(
        (m) => m.ErrorHandlingModule
      ),
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent,
  },
  //
  /* {
    path:'',
    component:HomeComponent,
  }, */
  // Following is default router and should be at last 2nd always
  /*   {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  }, */
  // Following is default router and should be at last always
  {
    path: '**',
    redirectTo: 'pagenotfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
