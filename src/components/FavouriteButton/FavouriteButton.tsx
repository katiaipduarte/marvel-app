import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FavouriteButtonContainer } from './FavouriteButton.style';
import { useDispatch } from 'react-redux';
import { addFavourite, deleteFavourite } from '../../store/favourites/action';

type Props = {
  comicId: number;
  status: boolean;
};

const FavouriteButton = (props: Props): JSX.Element => {
  const { comicId, status } = props;
  const [showFavButton, setShowFavButton] = useState<boolean>(status);
  const dispatch = useDispatch();
  // const [cookies, setCookie] = useCookies([favourites.cookie_key]);

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
