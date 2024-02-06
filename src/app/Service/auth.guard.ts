import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  router: any;

  constructor(public auth: AuthService, router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean | UrlTree | Observable<boolean|UrlTree> | Promise<boolean|UrlTree> {
        return this.auth.isAuthenticated$.pipe(
            map((isLoggedIn: any) => {
                if(!isLoggedIn) {
                    return this.router.parseUrl('/401');
                }
                
                return true;
            })
        )
    }
}
