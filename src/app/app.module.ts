import { routing } from './routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './login/services/login.service';
import { TiersService } from './tiers/services/tiers.service';
import { RaphaelApi } from './common/services/raphael-api.service';
import { LoginComponent } from './login/components/login.component';
import { TiersComponent } from './tiers/components/tiers.component';
import { TiersFormComponent } from './tiers/components/tiers-form.component';
import { TiersTableComponent } from './tiers/components/tiers-table.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TiersComponent,
        TiersFormComponent,
        TiersTableComponent
  ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    providers: [
        CookieService,
        RaphaelApi,
        LoginService,
        TiersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
