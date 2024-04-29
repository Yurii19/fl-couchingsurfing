import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  selectedItem: string = '';

  dashboardLink: string = 'dashboard';
  verificationLink: string = 'verify';

  ngOnInit(): void {}

  logout() {
    console.log('logout');
  }

  // dropdownList(): void {
  //   let list = document.getElementById('settings-options');
  //   list!.classList.toggle('open');
  // }

  onNavbarItemSelect(item: string): void {
    this.selectedItem = item;
  }
}
