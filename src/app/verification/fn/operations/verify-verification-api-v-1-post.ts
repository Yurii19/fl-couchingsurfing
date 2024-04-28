/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseData } from '../../models/response-data';
import { VerificationData } from '../../models/verification-data';

export interface VerifyVerificationApiV1Post$Params {
      body: VerificationData
}

export function verifyVerificationApiV1Post(http: HttpClient, rootUrl: string, params: VerifyVerificationApiV1Post$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseData>> {
  const rb = new RequestBuilder(rootUrl, verifyVerificationApiV1Post.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ResponseData>;
    })
  );
}

verifyVerificationApiV1Post.PATH = '/verification/api/v1';
