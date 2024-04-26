/* tslint:disable */
/* eslint-disable */
import { UserHome } from '../models/user-home';
import { UserInfo } from '../models/user-info';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<'ROLE_OWNER' | 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_SURFER' | 'ROLE_HOST'>;
  credentialsNonExpired?: boolean;
  dateCreated?: string;
  email?: string;
  enabled?: boolean;
  fullName?: string;
  id?: string;
  isVerified?: boolean;
  rating?: number;
  userHome?: UserHome;
  userInfo?: UserInfo;
  username?: string;
}
