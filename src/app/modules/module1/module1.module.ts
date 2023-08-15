import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesComponent, DepositDetailsComponent, NotificationsComponent } from './components';
import { Module1RoutingModule } from './module1-routing.module';
import { ShellComponent } from './pages';
import { EvenMoreDetailsComponent } from './components/even-more-details/even-more-details.component';



@NgModule({
  declarations: [
    FinancesComponent,
    ShellComponent,
    DepositDetailsComponent,
    NotificationsComponent,
    EvenMoreDetailsComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
  ]
})
export class Module1Module { }
