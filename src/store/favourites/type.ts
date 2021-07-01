export const FavouritesType = {
  ADD_FAVOURITE: '@@FAVOURITES/ADD_FAVOURITE',
  DELETE_FAVOURITE: '@@FAVOURITES/DELETE_FAVOURITE',
  INIT_FAVOURITES: '@@FAVOURITES/INIT_FAVOURITES',
};

export interface Favourites {
  favourites: number[];
  cookie_key: string;
}

export const FAVOURITES_INITIAL_STATE: Favourites = {
  favourites: [],
  cookie_key: 'FAVOURITES',
};
