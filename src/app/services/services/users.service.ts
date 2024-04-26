/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getHosts } from '../fn/users/get-hosts';
import { GetHosts$Params } from '../fn/users/get-hosts';
import { getSurfers } from '../fn/users/get-surfers';
import { GetSurfers$Params } from '../fn/users/get-surfers';
import { PageUser } from '../models/page-user';
import { updateUserInfo } from '../fn/users/update-user-info';
import { UpdateUserInfo$Params } from '../fn/users/update-user-info';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateUserInfo()` */
  static readonly UpdateUserInfoPath = '/users/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserInfo$Response(params: UpdateUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return updateUserInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserInfo(params: UpdateUserInfo$Params, context?: HttpContext): Observable<User> {
    return this.updateUserInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `getSurfers()` */
  static readonly GetSurfersPath = '/users/surfers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSurfers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurfers$Response(params: GetSurfers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUser>> {
    return getSurfers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSurfers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurfers(params: GetSurfers$Params, context?: HttpContext): Observable<PageUser> {
    return this.getSurfers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUser>): PageUser => r.body)
    );
  }

  /** Path part for operation `getHosts()` */
  static readonly GetHostsPath = '/users/hosts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHosts$Response(params: GetHosts$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUser>> {
    return getHosts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHosts(params: GetHosts$Params, context?: HttpContext): Observable<PageUser> {
    return this.getHosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUser>): PageUser => r.body)
    );
  }

}
