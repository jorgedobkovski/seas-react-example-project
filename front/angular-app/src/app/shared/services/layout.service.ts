import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isSidebarOpenSubject = new BehaviorSubject<boolean>(window.innerWidth >= 992);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();

  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth < 992);
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      const mobile = window.innerWidth < 992;
      this.isMobileSubject.next(mobile);
      if (mobile) {
        this.isSidebarOpenSubject.next(false);
      } else {
        this.isSidebarOpenSubject.next(true);
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarOpenSubject.next(!this.isSidebarOpenSubject.value);
  }

  closeSidebarOnMobile(): void {
    if (this.isMobileSubject.value) {
      this.isSidebarOpenSubject.next(false);
    }
  }
}
