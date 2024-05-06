import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../services/models/user';
import { ReviewsService } from '../../services/services/reviews.service';
import { Router } from '@angular/router';
import { Review } from '../../services/models/review';
import { RequestsService } from '../../services/services/requests.service';
import { UsersService } from '../../services/services/users.service';
import { Request } from '../../services/models/request';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css'],
})
export class ReviewsPageComponent implements OnInit {
  @Input() user!: User;
  page = 0;
  size = 1000;
  serviceType: 'ACCOMMODATION_REQUEST' | 'ACCOMMODATION_PROVISION' =
    'ACCOMMODATION_PROVISION';

  composedReviews: ComposedReview[] = [];
  composedReviews$: BehaviorSubject<ComposedReview[]> = new BehaviorSubject([
    {
      review: {} as Review,
      request: {} as Request,
      reviewSender: {fullName: ''} as User,
    },
  ]);

  constructor(
    private reviewsService: ReviewsService,
    private requestsService: RequestsService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData(this.serviceType);
  }

  loadData(serviceType: 'ACCOMMODATION_REQUEST' | 'ACCOMMODATION_PROVISION') {
    this.reviewsService
      .getIncomingReviews({
        page: this.page,
        size: this.size,
        serviceType: serviceType,
      })
      .subscribe({
        next: (res) => {
          const reviews = res.content as Review[];
          reviews.forEach((review) => {
            
            combineLatest([
              this.requestsService.getRequest({
                requestId: review.requestId as string,
              }),
              this.usersService.getUserById({
                userId: review.senderId as string,
              }),
            ]).subscribe((response) => {
              const user = response[1];
              const request = response[0];
              const composedReview: ComposedReview = {
                review,
                request: request,
                reviewSender: user,
              };
              console.log(composedReview)
              this.composedReviews = [...this.composedReviews, composedReview];
              this.composedReviews$.next(this.composedReviews);
           
            });

            // console.log(tempRequest);
            // console.log(tempUser);

            // const composedReview: ComposedReview = {
            //   review,
            //   request: tempRequest,
            //   reviewSender: tempUser,
            // };
          });

          // console.log(`Reviews of ${this.serviceType} retrieved.`);
        },
        error: (err) => console.log('Error retrieving reviews.'),
      });
  }

  // loadRequest(requestId: string): Request {
  //   this.requestsService
  //     .getRequest({
  //       requestId: requestId,
  //     })
  //     .subscribe({
  //       next: (res) => {
  //         // console.log(res);
  //         // console.log(`Request ${requestId} retrieved.`);

  //         return res;
  //       },
  //       error: (err) => console.log('Error during request retrieving'),
  //     });

  //   return {};
  // }
  // loadReviewSender(senderId: string): User {
  //   this.usersService
  //     .getUserById({
  //       userId: senderId,
  //     })
  //     .subscribe({
  //       next: (res) => {
  //         // console.log(res);
  //         // console.log(`User ${senderId} retrieved.`);

  //         return res;
  //       },
  //       error: (err) => {
  //         console.log('Error during user retrieving');
  //       },
  //     });

  //   return {};
  // }

  setServiceType(
    serviceType: 'ACCOMMODATION_REQUEST' | 'ACCOMMODATION_PROVISION'
  ) {
    this.composedReviews = [];
    this.serviceType = serviceType;
    this.loadData(this.serviceType);
  }
}

interface ComposedReview {
  review: Review;
  request: Request;
  reviewSender: User;
}
