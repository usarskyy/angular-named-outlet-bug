import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,

    children: [
      {
        path: 'finances',
        loadChildren: () => import('./modules/module1').then(m => m.Module1Module),
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
