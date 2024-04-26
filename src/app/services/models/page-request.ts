/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { Request } from '../models/request';
import { SortObject } from '../models/sort-object';
export interface PageRequest {
  content?: Array<Request>;
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
