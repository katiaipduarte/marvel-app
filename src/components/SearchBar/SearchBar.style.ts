import styled from 'styled-components';

export const SearchBarContainer = styled.form`
    width: 75%;
    padding: 0.5rem;
    border-radius: 0.4rem;
    margin: 1rem auto 0;
    background: ${({ theme }) => theme.body};

    &:focus-visible,
    &:focus {
      outline: 2px solid black;
    }

    input {
      border: none;
      color: ${({ theme }) => theme.text};
      outline: none;
      font-size: 1rem;
      width: calc(100% - 4rem);
      margin-left: 0.5rem; 
      background: transparent;
    }

    #search-term-btn,
    #clear-search-term-btn {
      background: none;
      border: none;
      cursor: pointer;
      vertical-align: bottom;
      svg {
        color: ${({ theme }) => theme.text};
        height: 1rem;
        width: 1rem;
      }
      &:focus {
        outline: none;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 32rem;
  }
`;
