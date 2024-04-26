/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteRequest } from '../fn/requests/delete-request';
import { DeleteRequest$Params } from '../fn/requests/delete-request';
import { getIncomingRequests } from '../fn/requests/get-incoming-requests';
import { GetIncomingRequests$Params } from '../fn/requests/get-incoming-requests';
import { getOutgoingRequests } from '../fn/requests/get-outgoing-requests';
import { GetOutgoingRequests$Params } from '../fn/requests/get-outgoing-requests';
import { getRequest } from '../fn/requests/get-request';
import { GetRequest$Params } from '../fn/requests/get-request';
import { PageRequest } from '../models/page-request';
import { Request } from '../models/request';
import { sendAccommodationRequest } from '../fn/requests/send-accommodation-request';
import { SendAccommodationRequest$Params } from '../fn/requests/send-accommodation-request';
import { updateRequest } from '../fn/requests/update-request';
import { UpdateRequest$Params } from '../fn/requests/update-request';

@Injectable({ providedIn: 'root' })
export class RequestsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sendAccommodationRequest()` */
  static readonly SendAccommodationRequestPath = '/requests/send-request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendAccommodationRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendAccommodationRequest$Response(params: SendAccommodationRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Request>> {
    return sendAccommodationRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendAccommodationRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendAccommodationRequest(params: SendAccommodationRequest$Params, context?: HttpContext): Observable<Request> {
    return this.sendAccommodationRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<Request>): Request => r.body)
    );
  }

  /** Path part for operation `updateRequest()` */
  static readonly UpdateRequestPath = '/requests/update/{requestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRequest$Response(params: UpdateRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return updateRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRequest(params: UpdateRequest$Params, context?: HttpContext): Observable<boolean> {
    return this.updateRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getRequest()` */
  static readonly GetRequestPath = '/requests/{requestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRequest$Response(params: GetRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Request>> {
    return getRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRequest(params: GetRequest$Params, context?: HttpContext): Observable<Request> {
    return this.getRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<Request>): Request => r.body)
    );
  }

  /** Path part for operation `getOutgoingRequests()` */
  static readonly GetOutgoingRequestsPath = '/requests/outgoing';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOutgoingRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOutgoingRequests$Response(params: GetOutgoingRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<PageRequest>> {
    return getOutgoingRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOutgoingRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOutgoingRequests(params: GetOutgoingRequests$Params, context?: HttpContext): Observable<PageRequest> {
    return this.getOutgoingRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageRequest>): PageRequest => r.body)
    );
  }

  /** Path part for operation `getIncomingRequests()` */
  static readonly GetIncomingRequestsPath = '/requests/incoming';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIncomingRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIncomingRequests$Response(params: GetIncomingRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<PageRequest>> {
    return getIncomingRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIncomingRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIncomingRequests(params: GetIncomingRequests$Params, context?: HttpContext): Observable<PageRequest> {
    return this.getIncomingRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageRequest>): PageRequest => r.body)
    );
  }

  /** Path part for operation `deleteRequest()` */
  static readonly DeleteRequestPath = '/requests/delete/{requestId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRequest$Response(params: DeleteRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRequest(params: DeleteRequest$Params, context?: HttpContext): Observable<string> {
    return this.deleteRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
