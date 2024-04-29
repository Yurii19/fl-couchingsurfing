/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ResponseData } from '../models/response-data';
import { verifyVerificationApiV1Post } from '../fn/operations/verify-verification-api-v-1-post';
import { VerifyVerificationApiV1Post$Params } from '../fn/operations/verify-verification-api-v-1-post';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `verifyVerificationApiV1Post()` */
  static readonly VerifyVerificationApiV1PostPath = '/verification/api/v1';

  /**
   * Verify.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyVerificationApiV1Post()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  verifyVerificationApiV1Post$Response(params: VerifyVerificationApiV1Post$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseData>> {
    return verifyVerificationApiV1Post(this.http, this.rootUrl, params, context);
  }

  /**
   * Verify.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `verifyVerificationApiV1Post$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  verifyVerificationApiV1Post(params: VerifyVerificationApiV1Post$Params, context?: HttpContext): Observable<ResponseData> {
    return this.verifyVerificationApiV1Post$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseData>): ResponseData => r.body)
    );
  }

}
