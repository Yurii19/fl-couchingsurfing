/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addReview } from '../fn/reviews/add-review';
import { AddReview$Params } from '../fn/reviews/add-review';
import { deleteReview } from '../fn/reviews/delete-review';
import { DeleteReview$Params } from '../fn/reviews/delete-review';
import { getIncomingReviews } from '../fn/reviews/get-incoming-reviews';
import { GetIncomingReviews$Params } from '../fn/reviews/get-incoming-reviews';
import { getOutgoingReviews } from '../fn/reviews/get-outgoing-reviews';
import { GetOutgoingReviews$Params } from '../fn/reviews/get-outgoing-reviews';
import { getReview } from '../fn/reviews/get-review';
import { GetReview$Params } from '../fn/reviews/get-review';
import { PageReview } from '../models/page-review';
import { Review } from '../models/review';
import { updateReview } from '../fn/reviews/update-review';
import { UpdateReview$Params } from '../fn/reviews/update-review';

@Injectable({ providedIn: 'root' })
export class ReviewsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addReview()` */
  static readonly AddReviewPath = '/reviews/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReview$Response(params: AddReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return addReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReview(params: AddReview$Params, context?: HttpContext): Observable<Review> {
    return this.addReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /** Path part for operation `updateReview()` */
  static readonly UpdateReviewPath = '/reviews/update/{reviewId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReview$Response(params: UpdateReview$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return updateReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReview(params: UpdateReview$Params, context?: HttpContext): Observable<boolean> {
    return this.updateReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getReview()` */
  static readonly GetReviewPath = '/reviews/{reviewId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReview()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReview$Response(params: GetReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return getReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReview(params: GetReview$Params, context?: HttpContext): Observable<Review> {
    return this.getReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /** Path part for operation `getOutgoingReviews()` */
  static readonly GetOutgoingReviewsPath = '/reviews/outgoing';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOutgoingReviews()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOutgoingReviews$Response(params: GetOutgoingReviews$Params, context?: HttpContext): Observable<StrictHttpResponse<PageReview>> {
    return getOutgoingReviews(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOutgoingReviews$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOutgoingReviews(params: GetOutgoingReviews$Params, context?: HttpContext): Observable<PageReview> {
    return this.getOutgoingReviews$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageReview>): PageReview => r.body)
    );
  }

  /** Path part for operation `getIncomingReviews()` */
  static readonly GetIncomingReviewsPath = '/reviews/incoming';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIncomingReviews()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIncomingReviews$Response(params: GetIncomingReviews$Params, context?: HttpContext): Observable<StrictHttpResponse<PageReview>> {
    return getIncomingReviews(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIncomingReviews$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIncomingReviews(params: GetIncomingReviews$Params, context?: HttpContext): Observable<PageReview> {
    return this.getIncomingReviews$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageReview>): PageReview => r.body)
    );
  }

  /** Path part for operation `deleteReview()` */
  static readonly DeleteReviewPath = '/reviews/delete/{reviewId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReview()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReview$Response(params: DeleteReview$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReview(params: DeleteReview$Params, context?: HttpContext): Observable<string> {
    return this.deleteReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
