import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WrapperAroundModule1Component } from './wrapper-around-module1/wrapper-around-module1.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,

    children: [
      {
        path: 'finances',
        component: WrapperAroundModule1Component,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/module1').then(m => m.Module1Module),
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
