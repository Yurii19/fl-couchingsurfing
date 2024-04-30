import { CanActivateFn } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(StorageService);
  if (store.email) {
    return true;
  } else {
    return false;
  }
};
