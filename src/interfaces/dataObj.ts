import { Character } from './character';
import { Comic } from './comic';

export type DataObj = {
  count: number;
  limit: number;
  results: Comic[] | Character[];
  offset: number;
  total: number;
};
