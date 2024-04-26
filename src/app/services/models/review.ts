/* tslint:disable */
/* eslint-disable */
export interface Review {
  dateCreated?: string;
  id?: string;
  rating?: number;
  receiverId?: string;
  reviewMessage?: string;
  senderId?: string;
  serviceType?: 'ACCOMMODATION_PROVISION' | 'ACCOMMODATION_REQUEST';
  wouldRepeat?: boolean;
}
