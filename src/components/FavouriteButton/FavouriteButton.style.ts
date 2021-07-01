import styled from 'styled-components';

export const FavouriteButtonContainer = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  height: 2rem;
  width: 3rem;
  top: 0;
  right: 0;

  &:focus,
  &:focus-visible {
    outline: 0.25rem solid ${({ theme }) => theme.primaryColor};
  }

  svg {
    height: 2rem;
    width: 2rem !important;
    cursor: pointer;
  }

  &.favourite-btn svg {
    color: white;
  }

  &.unfavourite-btn svg {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
