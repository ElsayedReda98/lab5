import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../Services/user/user.service';

export const loginGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);
  let userService = inject(UserService);
  if (!userService.getCurrentValue()) {
    return true
  } else {
    router.navigate(['/profile']);
    return false;
  }
};

