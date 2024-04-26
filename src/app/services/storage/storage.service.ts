import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  set token(token: string) {
    localStorage.setItem("token", token);
  }

  get token(): string | null {
    return localStorage.getItem("token") as string;
  }

}
