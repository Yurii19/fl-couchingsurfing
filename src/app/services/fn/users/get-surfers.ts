/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageUser } from '../../models/page-user';

export interface GetSurfers$Params {
  location: string;
  page: number;
  size: number;
}

export function getSurfers(http: HttpClient, rootUrl: string, params: GetSurfers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUser>> {
  const rb = new RequestBuilder(rootUrl, getSurfers.PATH, 'get');
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
      return r as StrictHttpResponse<PageUser>;
    })
  );
}

getSurfers.PATH = '/users/surfers';
