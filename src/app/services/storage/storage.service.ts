import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  user$: BehaviorSubject<User> = new BehaviorSubject({});

  setUser(user: User) {
    this.user$.next(user);
  }
  getUser(){
    return this.user$;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
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
