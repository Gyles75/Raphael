import { Router } from '@angular/router';
import { User } from '../domain/user.domain';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'rpl-login',
    templateUrl: '../views/login.component.html',
    styleUrls: ['../views/login.component.css']
})
export class LoginComponent implements OnInit {

    user:   User;
    error:  any;

    /**
     * Constructor
     */
    constructor(private _router: Router,
                private loginService: LoginService) {
    }

    /**
     * onInit
     */
    public ngOnInit(): void {
        this.clear();
    }

    /**
     * Call Login Service
     */
    private doLogin(): void {
        this.error = null;

        this.loginService.login(this.user).subscribe(response => {
            console.log(response);
            this.loginService.saveToken(response);
            this._router.navigate(['tiers']);
        }, (error) => {
            console.log(error);
            this.error = error;
        });
    }

    /**
     * Clear
     */
    private clear(): void {
        this.error  = null;
        this.user   = new User({
            username: 'user',
            password: 'user'
        });
    }

    /**
     * Handle Error
     * @param error
     */
    private handleError(error: any): string {
        switch (error.status) {
            case 400: return 'Requête invalide';
            case 401: return 'Action non autorisée';
            case 403: return 'Roles insuffisants';
            case 404: return 'Page introuvable';
            case 503: return 'Serveur indisponible';
        }
    }
}
