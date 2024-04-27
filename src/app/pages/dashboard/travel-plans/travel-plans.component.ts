import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-plans',
  templateUrl: './travel-plans.component.html',
  styleUrls: ['./travel-plans.component.css'],
})
export class TravelPlansComponent {
  links: { name: string; url: string }[] = [
    { name: 'Create a Publick Trip', url: '' },
    { name: 'My Public Trips', url: '' },
    { name: 'My Couch Requests', url: '' },
  ];
}
