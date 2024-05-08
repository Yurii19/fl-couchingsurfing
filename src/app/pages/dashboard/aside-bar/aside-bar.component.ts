import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../services/models/user';
import { UsersService } from '../../../services/services/users.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css'],
})
export class AsideBarComponent implements OnInit, OnDestroy {
  currentUser: User = {};

  private destroy$ = new Subject<void>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getAuthenticatedUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.currentUser = res;
          console.log(`Logged user: ${res.id}`);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
