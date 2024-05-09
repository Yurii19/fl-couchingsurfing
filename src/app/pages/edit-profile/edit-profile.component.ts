import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/models/user';
import { UsersService } from 'src/app/services/services/users.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'], 
})
export class EditProfileComponent implements OnInit {
  constructor(
    private userServices: UsersService,
    private storeService: StorageService
  ) {}

  ngOnInit(): void {
    this.userServices.getAuthenticatedUser().subscribe((user: User) => {
      this.storeService.setUser(user);
    });
  }
}
