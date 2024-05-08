import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/services/requests.service';
import { Request } from '../../../services/models/request';
import { NavigationEnd, Router } from '@angular/router';
import { FormsService } from '../../../services/forms/forms.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-travel-plans',
  templateUrl: './travel-plans.component.html',
  styleUrls: ['./travel-plans.component.css'],
})
export class TravelPlansComponent implements OnInit, OnDestroy {
  links: { name: string; url: string }[] = [
    { name: 'Create a Public Trip', url: '/dashboard/public-trips/manage' },
    { name: 'My Public Trips', url: 'dashboard/public-trips' },
    { name: 'My Couch Requests', url: 'dashboard/couch-requests' },
  ];

  page: number = 0;
  size: number = 1000;
  myCurrentTrips: Request[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private requestsService: RequestsService,
    private router: Router,
    private formsService: FormsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData() {
    this.requestsService
      .getOutgoingRequests({
        page: this.page,
        size: this.size,
        requestStatusList: ['ACCEPTED'],
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.myCurrentTrips = res.content as Request[];
          console.log('Requests retrieved ' + this.myCurrentTrips.length);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  edit(trip: Request) {
    this.formsService.setRequest(trip);
  }

  viewProfile(userId: string | undefined) {
    if (userId === undefined) return;
    this.router.navigateByUrl(`/profile/${userId}`);
  }
}
