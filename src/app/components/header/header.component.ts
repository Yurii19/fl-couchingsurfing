import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
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
