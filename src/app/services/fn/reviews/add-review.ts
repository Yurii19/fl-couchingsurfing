/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface AddReview$Params {
      body: Review
}

export function addReview(http: HttpClient, rootUrl: string, params: AddReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, addReview.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

addReview.PATH = '/reviews/add';
