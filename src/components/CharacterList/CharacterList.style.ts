import styled from 'styled-components';

export const SearchOptions = styled.ul`
  list-style: none;
  height: auto;
  background: white;
  border-style: none;
  width: 75%;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 0 0 1rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  top: 7.45rem;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.12) 0px 6px 16px;

  li {
    height: 1rem;
    width: 100%;
    vertical-align: middle;
    margin: 0 0 0.5rem;
    cursor: pointer;
    padding: 0 0.5rem;

    p {
      width: inherit;
      padding: 0.25rem 0;
      font-size: 1rem;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    &:hover,
    &:focus,
    &:focus-visible {
      p {
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 32rem;
  }
`;
