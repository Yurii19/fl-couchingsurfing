import { Component, Input, OnInit } from '@angular/core';
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
export class ProfileMainSectionComponent implements OnInit {
  @Input() noEdit : boolean = false;
  user!: User;

  activeTab: tabs = tabs.about;
  tabs = tabs;



  constructor(private storeService: StorageService) {}
  ngOnInit(): void {
    this.storeService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  swapTab(tab: tabs) {
    this.activeTab = tab;
  }
}
