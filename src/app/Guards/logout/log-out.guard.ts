import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../Services/user/user.service';

export const logOutGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let userService = inject(UserService)
  if (userService.getCurrentValue()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
