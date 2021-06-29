import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li {
    svg {
      width: 2rem !important;
      height: 2rem;
    }
    cursor: pointer;
    border: 0.4rem;
    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }
    &.disabled {
      opacity: 0.3;
      cursor: default;
    }
  }
`;
