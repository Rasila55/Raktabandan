import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{routes } from './app.routes'
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { BecomeDonorComponent } from './become-donor/become-donor.component';
import { RequestBloodComponent } from './request-blood/request-blood.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent,FooterComponent,LoginComponent,
    ProfileComponent,FindDonorComponent,BecomeDonorComponent,RequestBloodComponent,PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'raktabandan';
}
