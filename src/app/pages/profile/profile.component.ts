import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/services';
import { User } from 'src/app/services/models';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;

  viewProfile = false;

  constructor(
    private userServices: UsersService,
    private storeService: StorageService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.viewProfile = true;
      this.userServices.getUserById({ userId }).subscribe((user: User) => {
        this.storeService.setUser(user);
      });
    } else {
      this.viewProfile = false;
      this.userServices.getAuthenticatedUser().subscribe((user: User) => {
        this.storeService.setUser(user);
      });
    }
  }
}
