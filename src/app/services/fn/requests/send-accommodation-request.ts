/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Request } from '../../models/request';

export interface SendAccommodationRequest$Params {
      body: Request
}

export function sendAccommodationRequest(http: HttpClient, rootUrl: string, params: SendAccommodationRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Request>> {
  const rb = new RequestBuilder(rootUrl, sendAccommodationRequest.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

sendAccommodationRequest.PATH = '/requests/send-request';
