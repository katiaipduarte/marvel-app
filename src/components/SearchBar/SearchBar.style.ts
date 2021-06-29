import styled from 'styled-components';

export const SearchBarContainer = styled.form`
    max-width: 32rem;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    margin: 1rem auto 0;
    background: ${({ theme }) => theme.body};

    &:focus-visible,
    &:focus:not(:focus-visible) {
      outline: auto;
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
      vertical-align: middle;
      svg {
        color: ${({ theme }) => theme.text};
        height: 1rem;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
