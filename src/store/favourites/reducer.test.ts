import { AnyAction } from 'redux';
import favouritesReducer from './reducer';
import { FAVOURITES_INITIAL_STATE, FavouritesType } from './type';

describe('Test Suite for Favourites Store Reducer', () => {
  it('should return the cookie id and empty favourites array when initial state and action is undefined', () =>
    expect(favouritesReducer(undefined, {} as AnyAction)).toEqual(FAVOURITES_INITIAL_STATE));

  it('should init favourites list by adding information (that in real time comes from cookies)', () => {
    const favourites: number[] = [];
    const init = {
      type: FavouritesType.INIT_FAVOURITES,
      payload: favourites,
    };

    expect(favouritesReducer(FAVOURITES_INITIAL_STATE, init).favourites).toEqual(favourites);
  });

  it('should update favourites by adding a new id', () => {
    const id = 1000;

    const addFavouriteAction = {
      type: FavouritesType.ADD_FAVOURITE,
      payload: id,
    };
    expect(favouritesReducer(FAVOURITES_INITIAL_STATE, addFavouriteAction).favourites).toEqual([id]);
  });

  it('should update favourites by removing an id', () => {
    const id = 1000;

    const deleteFavouriteAction = {
      type: FavouritesType.DELETE_FAVOURITE,
      payload: id,
    };
    expect(favouritesReducer(FAVOURITES_INITIAL_STATE, deleteFavouriteAction).favourites).toEqual([]);
  });
});
