import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem, Priority } from '../../../../core/models/item.model';

@Component({ standalone: false,
  selector: 'app-item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() item!: IItem;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  prioridadeLabel(priority: Priority): string {
    switch (priority) {
      case Priority.Baixa:
      case Priority.Media:
      case Priority.Alta:
        return priority;
      default:
        return Priority.NaoDefinido;
    }
  }

  prioridadeBadge(priority: Priority): string {
    switch (priority) {
      case Priority.Baixa:
        return 'bg-success';
      case Priority.Media:
        return 'bg-warning';
      case Priority.Alta:
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
}

