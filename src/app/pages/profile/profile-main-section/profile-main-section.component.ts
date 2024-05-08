import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/services/models/user';
import { StorageService } from 'src/app/services/storage/storage.service';
export enum tabs {
  about = 'About',
  home = 'My Home',
  references = ' References',
}

@Component({
  selector: 'app-profile-main-section',
  templateUrl: './profile-main-section.component.html',
  styleUrls: ['./profile-main-section.component.css'],
})
export class ProfileMainSectionComponent implements OnInit, OnDestroy {
  @Input() noEdit: boolean = false;
  user!: User;

  activeTab: tabs = tabs.about;
  tabs = tabs;

  private destroy$ = new Subject<void>();

  constructor(private storeService: StorageService) {}
  ngOnInit(): void {
    this.storeService
      .getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  swapTab(tab: tabs) {
    this.activeTab = tab;
  }
}
