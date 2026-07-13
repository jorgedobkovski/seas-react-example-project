import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IItem, Priority } from '../../../../core/models/item.model';
import { ItemService } from '../../services/item';

@Component({ standalone: false,
  selector: 'app-item',
  templateUrl: './item.html',
  styleUrls: ['./item.css']
})
export class ItemComponent implements OnInit {
  items: IItem[] = [];
  selectedItem: IItem = this.getInitialItem();

  showItemModal = false;
  showConfirmModal = false;
  itemToDeleteId = 0;

  constructor(private itemService: ItemService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getItems();
  }

  getInitialItem(): IItem {
    return { id: 0, name: '', description: '', priority: Priority.NaoDefinido };
  }

  getItems(): void {
    this.itemService.getItems().subscribe({
      next: (items) => {
        console.log('Items recebidos da API:', items);
        this.items = items;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao buscar itens da API:', err);
      }
    });
  }

  newItem(): void {
    this.selectedItem = this.getInitialItem();
    this.showItemModal = true;
  }

  editItem(id: number): void {
    const item = this.items.find(i => i.id === id);
    if (item) {
      this.selectedItem = { ...item };
      this.showItemModal = true;
    }
  }

  closeModal(): void {
    this.showItemModal = false;
  }

  saveItem(item: IItem): void {
    if (item.id === 0) {
      this.itemService.createItem(item).subscribe(savedItem => {
        this.items = [...this.items, savedItem];
        this.closeModal();
        this.cdr.detectChanges();
      });
    } else {
      this.itemService.updateItem(item.id, item).subscribe(updatedItem => {
        this.items = this.items.map(i => i.id === updatedItem.id ? updatedItem : i);
        this.closeModal();
        this.cdr.detectChanges();
      });
    }
  }

  confirmDelete(id: number): void {
    this.itemToDeleteId = id;
    this.showConfirmModal = true;
  }

  cancelDelete(): void {
    this.showConfirmModal = false;
    this.itemToDeleteId = 0;
  }

  deleteItem(): void {
    if (this.itemToDeleteId !== 0) {
      this.itemService.deleteItem(this.itemToDeleteId).subscribe(() => {
        this.items = this.items.filter(i => i.id !== this.itemToDeleteId);
        this.cancelDelete();
        this.cdr.detectChanges();
      });
    }
  }
}

