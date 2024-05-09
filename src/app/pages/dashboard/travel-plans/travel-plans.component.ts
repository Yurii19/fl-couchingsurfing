import {Component, OnInit} from '@angular/core';
import {RequestsService} from "../../../services/services/requests.service";
import {Request} from "../../../services/models/request";
import {NavigationEnd, Router} from "@angular/router";
import {FormsService} from "../../../services/forms/forms.service";

@Component({
  selector: 'app-travel-plans',
  templateUrl: './travel-plans.component.html',
  styleUrls: ['./travel-plans.component.css'],
})
export class TravelPlansComponent implements OnInit {
  links: { name: string; url: string }[] = [
    { name: 'Create a Public Trip', url: '/dashboard/public-trips/manage' },
    { name: 'My Public Trips', url: 'dashboard/public-trips' },
    { name: 'My Couch Requests', url: 'dashboard/couch-requests' },
  ];

  page: number = 0;
  size: number = 1000;
  myCurrentTrips: Request[] = [];

  constructor(
    private requestsService: RequestsService,
    private router: Router,
    private formsService: FormsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.requestsService.getOutgoingRequests({
      page: this.page,
      size: this.size,
      requestStatusList: ['ACCEPTED']
    }).subscribe({
      next: (res) => {
        this.myCurrentTrips = res.content as Request[];
        console.log('Requests retrieved ' + this.myCurrentTrips.length);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  edit(trip: Request) {
    this.formsService.setRequest(trip)
  }

  viewProfile(userId: string | undefined) {
    if (userId === undefined) return;
    this.router.navigateByUrl(`/profile/${userId}`);
  }
}
