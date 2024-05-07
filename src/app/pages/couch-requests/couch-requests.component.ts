import { Component } from '@angular/core';
import { Request } from '../../services/models/request';
import { Router } from '@angular/router';
import { RequestsService } from '../../services/services/requests.service';
import { ReviewsService } from '../../services/services/reviews.service';

@Component({
  selector: 'app-couch-requests',
  templateUrl: './couch-requests.component.html',
  styleUrls: ['./couch-requests.component.css'],
})
export class CouchRequestsComponent {
  page: number = 0;
  size: number = 1000;

  requestStatus:
    | 'CREATED'
    | 'ACCEPTED'
    | 'DECLINED'
    | 'CANCELED'
    | 'COMPLETED' = 'ACCEPTED';
  couchRequests: Request[] = [];
  isModalShown = false;
  tripToFeedback: Request = {};

  constructor(
    private router: Router,
    private requestsService: RequestsService,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.loadData(this.requestStatus);
  }

  setRequestStatus(
    reqStatus: 'CREATED' | 'ACCEPTED' | 'DECLINED' | 'CANCELED' | 'COMPLETED'
  ) {
    this.requestStatus = reqStatus;
    this.loadData(reqStatus);
  }

  loadData(
    reqStatus: 'CREATED' | 'ACCEPTED' | 'DECLINED' | 'CANCELED' | 'COMPLETED'
  ) {
    this.requestsService
      .getIncomingRequests({
        page: this.page,
        size: this.size,
        requestStatusList: [reqStatus],
      })
      .subscribe({
        next: (res) => {
          this.couchRequests = res.content as Request[];
          console.log(`${reqStatus} requests retrieved.`);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  updateCouchRequest(
    couchRequest: Request,
    reqStatus: 'CREATED' | 'ACCEPTED' | 'DECLINED' | 'CANCELED' | 'COMPLETED'
  ) {
    couchRequest.requestStatus = reqStatus;

    this.requestsService
      .updateRequest({
        requestId: couchRequest.id as string,
        body: couchRequest,
      })
      .subscribe({
        next: (res) => console.log(`Request updated: ${couchRequest}`),
        error: (err) => console.log(`Request updating error: ${err}`),
      });

    location.reload();
  }

  giveFeedback(request: Request) {
    const theReq = this.couchRequests.find((req) => req.id === request.id);
    if (theReq !== undefined) {
      this.tripToFeedback = theReq;
      this.isModalShown = true;
    }

    console.log(`Feedback for ${request} couch request`);
  }

  viewProfile(userId: string | undefined) {
    if (userId === undefined) return;
    this.router.navigateByUrl(`/profile/${userId}`);
  }
}
