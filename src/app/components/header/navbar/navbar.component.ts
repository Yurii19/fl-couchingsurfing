import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { StorageService } from 'src/app/services/storage/storage.service';

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
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.storage.logout();
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
