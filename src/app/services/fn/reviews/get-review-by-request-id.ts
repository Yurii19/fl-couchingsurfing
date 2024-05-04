/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface GetReviewByRequestId$Params {
  requestId: string;
  serviceType: 'ACCOMMODATION_PROVISION' | 'ACCOMMODATION_REQUEST';
}

export function getReviewByRequestId(http: HttpClient, rootUrl: string, params: GetReviewByRequestId$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, getReviewByRequestId.PATH, 'get');
  if (params) {
    rb.query('requestId', params.requestId, {});
    rb.query('serviceType', params.serviceType, {});
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

getReviewByRequestId.PATH = '/reviews/by-requestId';
