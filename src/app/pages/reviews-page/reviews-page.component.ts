import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../services/models/user';
import { ReviewsService } from '../../services/services/reviews.service';
import { Router } from '@angular/router';
import { Review } from '../../services/models/review';
import { RequestsService } from '../../services/services/requests.service';
import { UsersService } from '../../services/services/users.service';
import { Request } from '../../services/models/request';
import { BehaviorSubject, Subject, combineLatest, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css'],
})
export class ReviewsPageComponent implements OnInit, OnDestroy {
  @Input() user!: User;
  page = 0;
  size = 1000;
  serviceType: 'ACCOMMODATION_REQUEST' | 'ACCOMMODATION_PROVISION' =
    'ACCOMMODATION_REQUEST';

  composedReviews: ComposedReview[] = [];
  composedReviews$: BehaviorSubject<ComposedReview[]> = new BehaviorSubject([
    {
      review: {} as Review,
      request: {} as Request,
      reviewSender: { fullName: '' } as User,
    },
  ]);

  private destroy$ = new Subject<void>();

  constructor(
    private reviewsService: ReviewsService,
    private requestsService: RequestsService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData(this.serviceType);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData(serviceType: 'ACCOMMODATION_REQUEST' | 'ACCOMMODATION_PROVISION') {
    this.composedReviews$.next([]);
    this.reviewsService
      .getIncomingReviews({
        userId: this.user.id,
        page: this.page,
        size: this.size,
        serviceType: serviceType,
      })
      .pipe(takeUntil(this.destroy$))
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
            ])
              .pipe(takeUntil(this.destroy$))
              .subscribe((response) => {
                const [request, user] = response;
                const composedReview: ComposedReview = {
                  review,
                  request: request,
                  reviewSender: user,
                };
                this.composedReviews = [
                  ...this.composedReviews,
                  composedReview,
                ];
                this.composedReviews$.next(this.composedReviews);
              });
          });
        },
        error: (err) => console.log('Error retrieving reviews.'),
      });
  }

  setServiceType(
    serviceType: 'ACCOMMODATION_REQUEST' | 'ACCOMMODATION_PROVISION'
  ) {
    this.composedReviews = [];
    this.composedReviews$.next([]);

    this.serviceType = serviceType;
    this.loadData(this.serviceType);
  }

  viewProfile(userId: string | undefined) {
    if (userId === undefined) return;
    this.router.navigateByUrl(`/profile/${userId}`);
  }
}

interface ComposedReview {
  review: Review;
  request: Request;
  reviewSender: User;
}
