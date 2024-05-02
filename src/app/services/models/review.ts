/* tslint:disable */
/* eslint-disable */
export interface Review {
  id?: string;
  rating?: number;
  receiverId?: string;
  requestId?: string;
  reviewMessage?: string;
  senderId?: string;
  serviceType?: 'ACCOMMODATION_PROVISION' | 'ACCOMMODATION_REQUEST';
  wouldRepeat?: boolean;
}
