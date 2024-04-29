import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  selectedItem: string = '';

  dashboardLink: string = 'dashboard';
  verificationLink: string = 'verify';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    console.log('logout');
    this.router.navigate(['login']);
  }

  // dropdownList(): void {
  //   let list = document.getElementById('settings-options');
  //   list!.classList.toggle('open');
  // }

  onNavbarItemSelect(item: string): void {
    this.selectedItem = item;
  }
}
