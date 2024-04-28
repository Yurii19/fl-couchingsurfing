/* tslint:disable */
/* eslint-disable */
export interface Request {
  from?: number;
  id?: string;
  location?: string;
  message?: string;
  receiver?: string;
  requestStatus?: 'CREATED' | 'ACCEPTED' | 'DECLINED' | 'CANCELED' | 'COMPLETED';
  sender?: string;
  serviceType?: 'ACCOMMODATION_PROVISION' | 'ACCOMMODATION_REQUEST';
  to?: number;
  travelersAmount?: number;
}
