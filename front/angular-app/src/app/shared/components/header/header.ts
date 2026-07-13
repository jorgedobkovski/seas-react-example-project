import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({ standalone: false,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  constructor(private layoutService: LayoutService) {}

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }
}

