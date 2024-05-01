import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/models/user';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profile-main-section',
  templateUrl: './profile-main-section.component.html',
  styleUrls: ['./profile-main-section.component.css'],
})
export class ProfileMainSectionComponent implements OnInit {
  user!: User;


  constructor(private storeService: StorageService) {}
  ngOnInit(): void {
    this.storeService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }
}
