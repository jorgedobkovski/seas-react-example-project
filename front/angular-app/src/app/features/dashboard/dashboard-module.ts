import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
