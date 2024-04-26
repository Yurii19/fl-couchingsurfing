/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { Review } from '../models/review';
import { SortObject } from '../models/sort-object';
export interface PageReview {
  content?: Array<Review>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: Array<SortObject>;
  totalElements?: number;
  totalPages?: number;
}
