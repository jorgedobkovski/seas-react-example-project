import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Subscription } from 'rxjs';

@Component({ standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isOpen = false;
  openPrivacy = false;
  openHelp = false;
  private sub?: Subscription;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.sub = this.layoutService.isSidebarOpen$.subscribe(open => {
      this.isOpen = open;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  togglePrivacy(): void {
    this.openPrivacy = !this.openPrivacy;
  }

  toggleHelp(): void {
    this.openHelp = !this.openHelp;
  }
}

