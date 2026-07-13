import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyListComponent } from './pages/company-list/company-list';
import { CompanyFormComponent } from './pages/company-form/company-form';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompanyListComponent, CompanyFormComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule],
  exports: [CompanyListComponent]
})
export class CompaniesModule {}
