import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/services';
import { User } from 'src/app/services/models';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
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
