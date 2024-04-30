import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(StorageService);
  const router = inject(Router)
  if (store.email) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
