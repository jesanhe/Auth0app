import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);

    if (this.auth.isAuthenticated()) {
      console.log('AuthGuard passed');
      return true;
    } else {
      console.log('AuthGuard not passed');
      return false;
    }
  }
}
