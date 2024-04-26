/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Request } from '../../models/request';

export interface GetRequest$Params {
  requestId: string;
  location?: string;
}

export function getRequest(http: HttpClient, rootUrl: string, params: GetRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Request>> {
  const rb = new RequestBuilder(rootUrl, getRequest.PATH, 'get');
  if (params) {
    rb.path('requestId', params.requestId, {});
    rb.query('location', params.location, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Request>;
    })
  );
}

getRequest.PATH = '/requests/{requestId}';
