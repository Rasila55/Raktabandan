import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIf}from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [ CommonModule,RouterModule,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = false;
  ngOnInit(){
     this.isLoggedIn = !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.isLoggedIn =false;
  }


}
