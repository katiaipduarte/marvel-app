import * as actions from './action';
import { FavouritesType } from './type';

describe('Test Suite for Favourite Store Actions', () => {
  it('should create an action to init favourites list', () => {
    const fav: number[] = [];
    const expectAction = {
      type: FavouritesType.INIT_FAVOURITES,
      error: undefined,
      meta: undefined,
      payload: fav,
    };

    expect(actions.initFavourite(fav)).toEqual(expectAction);
  });

  it('should create an action to update Favourites', () => {
    const fav = 100;
    const expectAction = {
      type: FavouritesType.ADD_FAVOURITE,
      error: undefined,
      meta: undefined,
      payload: fav,
    };

    expect(actions.addFavourite(fav)).toEqual(expectAction);
  });

  it('should create an action to delete a Favourite', () => {
    const fav = 100;
    const expectAction = {
      type: FavouritesType.DELETE_FAVOURITE,
      error: undefined,
      meta: undefined,
      payload: fav,
    };

    expect(actions.deleteFavourite(fav)).toEqual(expectAction);
  });
});
