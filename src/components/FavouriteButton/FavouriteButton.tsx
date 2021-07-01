import { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useCookies } from 'react-cookie';

import { FavouriteButtonContainer } from './FavouriteButton.style';
import { addFavourite, deleteFavourite } from '../../store/favourites/action';
import { GlobalState } from '../../store/store';

type Props = {
  comicId: number;
  status: boolean;
};

const FavouriteButton = (props: Props): JSX.Element => {
  const { comicId, status } = props;
  const [showFavButton, setShowFavButton] = useState<boolean>(status);
  const favourites = useSelector((state: GlobalState) => state.favouritesState);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies([favourites.cookie_key]);

  useEffect(() => {
    setCookie(favourites.cookie_key, favourites.favourites);
  }, [favourites.favourites]);

  const onFavourite = (): void => {
    dispatch(addFavourite(comicId));
    setShowFavButton(true);
  };

  const onUnfavourite = (): void => {
    dispatch(deleteFavourite(comicId));
    setShowFavButton(false);
  };

  return (
    <>
      <FavouriteButtonContainer
        onClick={onUnfavourite}
        style={{ display: showFavButton ? 'flex' : 'none' }}
        title="Unfavourite Comic"
        aria-label="Unfavourite Comic"
        className="unfavourite-btn"
      >
        <FontAwesomeIcon icon={faHeart} />
      </FavouriteButtonContainer>
      <FavouriteButtonContainer
        onClick={onFavourite}
        style={{ display: showFavButton ? 'none' : 'flex' }}
        title="Favourite Comic"
        aria-label="Favourite Comic"
        className="favourite-btn"
      >
        <FontAwesomeIcon icon={farHeart} />
      </FavouriteButtonContainer>
    </>
  );
};

export default memo(FavouriteButton);
