import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login.component';
import { TiersComponent } from './tiers/components/tiers.component';

const routes: Routes = [
    { path: 'tiers', component: TiersComponent },
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
