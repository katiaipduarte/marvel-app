import { action, PayloadAction } from 'typesafe-actions';
import { FavouritesType } from './type';

export const initFavourite = (comics: number[]): PayloadAction<string, number[]> =>
  action(FavouritesType.INIT_FAVOURITES, comics);

export const addFavourite = (id: number): PayloadAction<string, number> => action(FavouritesType.ADD_FAVOURITE, id);

export const deleteFavourite = (id: number): PayloadAction<string, number> =>
  action(FavouritesType.DELETE_FAVOURITE, id);
