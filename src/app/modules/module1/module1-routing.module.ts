import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositDetailsComponent, FinancesComponent, NotificationsComponent, EvenMoreDetailsComponent } from './components';
import { ShellComponent } from './pages';

const routes: Routes = [
  {
    path: 'artificially-added-level',
    component: ShellComponent,
    children: [
      {
        outlet: 'sidebar',
        component: NotificationsComponent,
        path: 'notifications',
      },
      {
        path: '',
        component: FinancesComponent,
        pathMatch: 'full',
      },
      {
        path: `:depositid`,

        children: [
          {
            path: `details`,
            component: DepositDetailsComponent,
            children: [
              {
                path: `i-want-more`,
                component: EvenMoreDetailsComponent,
              },
            ]
          },
          {
            path: `other-stuff`,
            component: DepositDetailsComponent,
          },
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full',
          },
          // ...
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'artificially-added-level',
    pathMatch: 'full',
  },
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
          })
export class Module1RoutingModule { }
