import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutesComponent } from './routes.component';
import { LayoutModule } from '../components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
    children: [
      {
        path: 'getting-started',
        loadChildren: () => import('doc/app/routes/getting-started/getting-started.module').then(m => m.GettingStartedModule),
      },
      {
        path: 'components',
        loadChildren: () => import('doc/app/routes/components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    RoutesComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesModule { }
