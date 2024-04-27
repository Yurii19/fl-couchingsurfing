/* tslint:disable */
/* eslint-disable */
import { UserHome } from '../models/user-home';
import { UserInfo } from '../models/user-info';
export interface User {
  authorities?: Array<'ROLE_OWNER' | 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_SURFER' | 'ROLE_HOST'>;
  dateCreated?: string;
  email?: string;
  fullName?: string;
  id?: string;
  isVerified?: boolean;
  rating?: number;
  userHome?: UserHome;
  userInfo?: UserInfo;
}
