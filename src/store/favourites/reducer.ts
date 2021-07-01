import { Reducer } from 'redux';
import { Favourites, FAVOURITES_INITIAL_STATE, FavouritesType } from './type';

type FavouritesReducer = {
  type: string;
  payload?: any;
};

const favouritesReducer: Reducer<Favourites> = (
  state: Favourites = FAVOURITES_INITIAL_STATE,
  action: FavouritesReducer,
) => {
  switch (action.type) {
    case FavouritesType.INIT_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, ...action.payload],
      };
    case FavouritesType.ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case FavouritesType.DELETE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((i: number) => !(i === action.payload.id)),
      };
    default:
      return { ...state };
  }
};

export default favouritesReducer;
