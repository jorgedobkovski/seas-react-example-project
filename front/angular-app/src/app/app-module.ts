import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared-module';
import { DashboardModule } from './features/dashboard/dashboard-module';
import { ItemsModule } from './features/items/items-module';
import { CompaniesModule } from './features/companies/companies-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    ItemsModule,
    CompaniesModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App]
})
export class AppModule { }
