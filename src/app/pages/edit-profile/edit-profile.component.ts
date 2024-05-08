import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/services/models/user';
import { UsersService } from 'src/app/services/services/users.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private userServices: UsersService,
    private storeService: StorageService
  ) {}

  ngOnInit(): void {
    this.userServices
      .getAuthenticatedUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.storeService.setUser(user);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
