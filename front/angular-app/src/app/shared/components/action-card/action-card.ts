import { Component, Input } from '@angular/core';

@Component({ standalone: false,
  selector: 'app-action-card',
  templateUrl: './action-card.html',
  styleUrls: ['./action-card.css']
})
export class ActionCardComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
}

