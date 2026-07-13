import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../../../core/models/item.model';

@Component({ standalone: false,
  selector: 'app-item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.css']
})
export class ItemListComponent {
  @Input() items: IItem[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}

