import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { SidebarComponent } from './components/sidebar/sidebar';
import { FooterComponent } from './components/footer/footer';
import { LayoutComponent } from './components/layout/layout';
import { ActionCardComponent } from './components/action-card/action-card';
import { StatCardComponent } from './components/stat-card/stat-card';
import { TitlePageComponent } from './components/title-page/title-page';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    ActionCardComponent,
    StatCardComponent,
    TitlePageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent, 
    LayoutComponent, 
    ActionCardComponent,
    StatCardComponent,
    TitlePageComponent
  ],
})
export class SharedModule {}
