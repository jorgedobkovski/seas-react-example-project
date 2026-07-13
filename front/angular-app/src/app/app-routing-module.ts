import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard';
import { ItemComponent } from './features/items/pages/item/item';
import { CompanyListComponent } from './features/companies/pages/company-list/company-list';
import { CompanyFormComponent } from './features/companies/pages/company-form/company-form';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'item/lista', component: ItemComponent },
  { path: 'empresa/lista', component: CompanyListComponent },
  { path: 'empresa/detalhes', component: CompanyFormComponent },
  { path: 'empresa/detalhes/:id', component: CompanyFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
