import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/services';
import { User } from 'src/app/services/models';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User = {} as User;

  viewProfile = false;

  private destroy$ = new Subject<void>();

  constructor(
    private userServices: UsersService,
    private storeService: StorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.viewProfile = true;
      this.userServices
        .getUserById({ userId })
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: User) => {
          this.storeService.setUser(user);
        });
    } else {
      this.viewProfile = false;
      this.userServices
        .getAuthenticatedUser()
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: User) => {
          this.storeService.setUser(user);
        });
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
