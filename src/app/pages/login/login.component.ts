import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';
import { StorageService } from '../../services/storage/storage.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  authRequest: AuthRequest = { email: '', password: '' };
  errorMsg: Array<string> = [];

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private storageService: StorageService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login() {
    this.errorMsg = [];
    this.authService
      .authenticate({
        body: this.authRequest,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.storageService.token = res.accessToken as string;
          this.storageService.email = this.authRequest.email;
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          console.log(err);

          if (err.error.validationErrors)
            this.errorMsg = err.error.validationErrors;
          else this.errorMsg.push(err.error.error);
        },
      });
  }

  register() {
    this.router.navigate(['register']);
  }
}
