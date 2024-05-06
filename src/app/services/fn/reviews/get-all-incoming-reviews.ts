/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface GetAllIncomingReviews$Params {
  userId?: string;
  serviceType: 'ACCOMMODATION_PROVISION' | 'ACCOMMODATION_REQUEST';
}

export function getAllIncomingReviews(http: HttpClient, rootUrl: string, params: GetAllIncomingReviews$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
  const rb = new RequestBuilder(rootUrl, getAllIncomingReviews.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('serviceType', params.serviceType, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Review>>;
    })
  );
}

getAllIncomingReviews.PATH = '/reviews/all-incoming';
