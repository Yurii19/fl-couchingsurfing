import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  routs: { name: string; icon: string }[] = [
    { name: 'verify', icon: 'fa-solid fa-circle-check verify-icon' },
    { name: 'dashboard', icon: 'fa-solid fa-earth-europe' },
    { name: 'profile', icon: 'fa-regular fa-user' },
    { name: 'settings', icon: 'fa-solid fa-gear' },
  ];
}
