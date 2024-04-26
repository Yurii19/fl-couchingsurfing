/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface GetReview$Params {
  reviewId: string;
}

export function getReview(http: HttpClient, rootUrl: string, params: GetReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, getReview.PATH, 'get');
  if (params) {
    rb.path('reviewId', params.reviewId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Review>;
    })
  );
}

getReview.PATH = '/reviews/{reviewId}';
