import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  logout() {
    this.token = '';
    this.email = '';
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): string | null {
    return localStorage.getItem('token') as string;
  }

  set email(email: string) {
    localStorage.setItem('email', email);
  }

  get email(): string | null {
    return localStorage.getItem('email') as string;
  }
}
