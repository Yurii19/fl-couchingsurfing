import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/services/models/request';
import { FormsService } from '../../services/forms/forms.service';
import { RequestsService } from '../../services/services/requests.service';
import { NavigationEnd, Router } from '@angular/router';
import { ReviewsService } from '../../services/services/reviews.service';

@Component({
  selector: 'app-public-trips',
  templateUrl: './public-trips.component.html',
  styleUrls: ['./public-trips.component.css'],
})
export class PublicTripsComponent implements OnInit {
  page: number = 0;
  size: number = 1000;

  trips: Request[] = [];
  isModalShown = false;
  tripToFeedback : Request = {} ;

  constructor(
    private router: Router,
    private formsService: FormsService,
    private requestsService: RequestsService,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/dashboard/public-trips') {
          this.loadData();
        }
      }
    });
  }

  loadData() {
    this.requestsService
      .getOutgoingRequests({
        page: this.page,
        size: this.size,
        requestStatusList: ['CREATED', 'COMPLETED'],
      })
      .subscribe({
        next: (res) => {
          this.trips = res.content as Request[];
          console.log('Requests retrieved.');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  edit(trip: Request) {
    this.formsService.setRequest(trip);
  }

  giveFeedback(requestId?: string) {
    const theTrip = this.trips.find((trip) => trip.id === requestId);
    if (theTrip !== undefined) {
      this.tripToFeedback = theTrip;
    }

    this.isModalShown = true;
  }
}
