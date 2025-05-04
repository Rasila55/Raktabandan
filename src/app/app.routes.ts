import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BecomeDonorComponent } from './become-donor/become-donor.component';
import { RequestBloodComponent } from './request-blood/request-blood.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'about-us', component: AboutUsComponent},

    {path:'login',component:LoginComponent},
    { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
    {path:'profile',component:ProfileComponent},
    {path:'become-donor',component:BecomeDonorComponent},
    {path:'request-blood',component:RequestBloodComponent},
    {path:'find-donor',component:FindDonorComponent},
    {path:'**',component:PageNotFoundComponent},


];
