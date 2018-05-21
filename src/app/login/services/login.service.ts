import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../domain/user.domain';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {

    private oAuthUrl = '/oauth';

    /**
     * Constructor
     * @param _router
     * @param _httpClient
     * @param _cookieService
     */
    constructor(private _router: Router,
                private _httpClient: HttpClient,
                private _cookieService: CookieService) {
    }

    /**
     * Call Login Endpoint
     * @param username
     * @param password
     */
    public login(user: User): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Basic c3VwZXItY2xpZW50OnNlY3JldA==')
        ;

        const body = new HttpParams()
            .set('username', user.username)
            .set('password', user.password)
            .set('grant_type', 'password')
        ;

        return this._httpClient.post<any>(`${this.oAuthUrl}/token`, body, { headers: headers });
    }

    /**
     * Call Logout Endpoint
     */
    public logout(): void {
        this._cookieService.delete('access_token', '/', 'localhost');
        this._router.navigate(['login']);
    }

    /**
     * Save Token On Local Cookie
     * @param response
     */
    public saveToken(response: any): void {
        this._cookieService.set('test', response);
        const expireDate = new Date().getTime() + (1000 * response.expires_in);

        this._cookieService.set(
            'access_token', `${response.token_type} ${response.access_token}`,
            new Date(expireDate),
            '/', 'localhost',
            false
        );
    }

    /**
     * Check Token Validity
     */
    public checkCredentials(): boolean {
        if (!this._cookieService.check('access_token')) {
            this._router.navigate(['login']);
            return false;
        }

        return true;
    }
}
