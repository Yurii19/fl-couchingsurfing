import { Injectable } from '@angular/core';
import { Request } from './models';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  currentRequest: Request = {} as Request;

  constructor() {}
  setRequest(r: Request) {
    this.currentRequest = r;
  }
}
