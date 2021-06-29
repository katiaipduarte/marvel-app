import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FavouriteButtonContainer } from './FavouriteButton.style';

const FavouriteButton = (): JSX.Element => {
  const [showFavButton, setShowFavButton] = useState<boolean>(false);

  return (
    <>
      <FavouriteButtonContainer
        onClick={() => setShowFavButton(false)}
        style={{ display: showFavButton ? 'flex' : 'none' }}
        title="Unfavourite Location"
        aria-label="Unfavourite Location"
        className="unfavourite-btn"
      >
        <FontAwesomeIcon icon={faHeart} />
      </FavouriteButtonContainer>
      <FavouriteButtonContainer
        onClick={() => setShowFavButton(true)}
        style={{ display: showFavButton ? 'none' : 'flex' }}
        title="Favourite Location"
        aria-label="Favourite Location"
        className="favourite-btn"
      >
        <FontAwesomeIcon icon={farHeart} />
      </FavouriteButtonContainer>
    </>
  );
};

export default FavouriteButton;
