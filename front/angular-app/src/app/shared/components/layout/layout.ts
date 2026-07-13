import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Subscription } from 'rxjs';

@Component({ standalone: false,
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isMobile = false;
  isSidebarOpen = false;
  private subs: Subscription = new Subscription();

  constructor(private layoutService: LayoutService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subs.add(this.layoutService.isMobile$.subscribe(val => {
      this.isMobile = val;
      this.cdr.detectChanges();
    }));
    this.subs.add(this.layoutService.isSidebarOpen$.subscribe(val => {
      this.isSidebarOpen = val;
      this.cdr.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  closeSidebarOnMobile(): void {
    this.layoutService.closeSidebarOnMobile();
  }
}

