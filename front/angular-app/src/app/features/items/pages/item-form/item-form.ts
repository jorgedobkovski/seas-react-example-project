import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IItem, Priority } from '../../../../core/models/item.model';

@Component({ standalone: false,
  selector: 'app-item-form',
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemFormComponent implements OnChanges {
  @Input() selectedItem!: IItem;
  @Output() save = new EventEmitter<IItem>();
  @Output() cancel = new EventEmitter<void>();

  item: IItem = { id: 0, name: '', description: '', priority: Priority.NaoDefinido };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedItem'] && changes['selectedItem'].currentValue) {
      this.item = { ...this.selectedItem };
    }
  }

  onSubmit(): void {
    this.save.emit(this.item);
  }

  onCancel(event: Event): void {
    event.preventDefault();
    this.cancel.emit();
  }
}

