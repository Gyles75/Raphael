import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    /**
     * Constructor
     * @param _router
     * @param _cookieService
     */
    constructor(private _router: Router,
                private _cookieService: CookieService) {
    }

    /**
     * canActivate Route
     * @param activatedRouteSnapshot
     */
    public canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url = state.url;

        if (!this._cookieService.check('access_token')) {
            this._router.navigate(['login']);
            return false;
        }

        if (url && url === '/login') {
            this._router.navigate(['tiers']);
        }

        return true;
    }
}
