import { Component, Input } from '@angular/core';

@Component({ standalone: false,
  selector: 'app-stat-card',
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.css']
})
export class StatCardComponent {
  @Input() icon: string = '';
  @Input() number: string = '';
  @Input() text: string = '';
  @Input() color: string = '';
}

