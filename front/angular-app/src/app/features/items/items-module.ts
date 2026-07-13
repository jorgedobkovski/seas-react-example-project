import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './pages/item/item';
import { ItemListComponent } from './pages/item-list/item-list';
import { ItemFormComponent } from './pages/item-form/item-form';
import { ItemCardComponent } from './components/item-card/item-card';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [ItemComponent, ItemListComponent, ItemFormComponent, ItemCardComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [ItemComponent]
})
export class ItemsModule {}
