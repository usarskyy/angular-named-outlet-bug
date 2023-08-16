import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { WrapperAroundModule1Component } from './wrapper-around-module1/wrapper-around-module1.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WrapperAroundModule1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
