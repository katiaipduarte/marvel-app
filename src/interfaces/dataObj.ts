import { Comic } from './comic';

export type DataObj = {
  count: number;
  limit: number;
  results: Comic[];
  offset: number;
  total: number;
};
