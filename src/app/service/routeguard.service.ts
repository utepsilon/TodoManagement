import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';


@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private HardcodedAuthService: HardcodedAuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.HardcodedAuthService.IsUserLoggedIn())
      return true;

    this.router.navigate(['**']);

    return false;

  }
}
