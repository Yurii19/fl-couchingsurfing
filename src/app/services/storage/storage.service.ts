import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // userEmail: BehaviorSubject<string> = new BehaviorSubject('un logined');

  // getUserEmail() {
  //   return this.userEmail;
  // }

  // setUserEmail(email: string) {
  //   this.userEmail.next(email);
  // }
  

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
