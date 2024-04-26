/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageRequest } from '../../models/page-request';

export interface GetIncomingRequests$Params {
  location: string;
  page: number;
  size: number;
}

export function getIncomingRequests(http: HttpClient, rootUrl: string, params: GetIncomingRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<PageRequest>> {
  const rb = new RequestBuilder(rootUrl, getIncomingRequests.PATH, 'get');
  if (params) {
    rb.query('location', params.location, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageRequest>;
    })
  );
}

getIncomingRequests.PATH = '/requests/incoming';
