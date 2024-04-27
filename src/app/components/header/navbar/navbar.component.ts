import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  selectedItem: string = 'dashboard';

  dashbordLink: string = 'dashboard';

  ngOnInit(): void {}

  dropdownList(): void {
    let list = document.getElementById('settings-options');
    list!.classList.toggle('open');
  }

  onNavbarItemSelect(item: string): void {
    this.selectedItem = item;
  }
}
