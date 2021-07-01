import styled from 'styled-components';

export const PaginationContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  .separator {
    width: 1.5rem;
    margin: 0 0.25rem;
    cursor: default;
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.5rem;
    text-align: center;
  }

  .pageItem {
    background: transparent;
    border: none;
    height: 3rem;
    width: 3rem;
    margin: 0 0.25rem;
    border-radius: 50%;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1rem;
    cursor: pointer;
    &:hover:not(&.active) {
      background-color: ${({ theme }) => theme.primaryColor};
      color: white;
      text-decoration: none;
      box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.12) 0px 6px 16px;
    }
    &:focus {
      outline: 0;
    }

    &:not(.active):not(.sides):not(&:nth-last-child(2)) {
      display: none;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    cursor: default;
    pointer-events: none;
  }

  .sides {
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
    &:hover {
      text-decoration: none;
      box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.12) 0px 6px 16px;
    }
  }

  @media (min-width: 768px) {
    .pageItem {
      display: initial !important;
    }
  }
`;
