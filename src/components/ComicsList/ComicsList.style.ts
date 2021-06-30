import styled from 'styled-components';

export const ComicsContainer = styled.section`
  .comics-list {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    flex: 3 1;
    margin: 3rem 0;

    article {
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      img {
        align-items: center;
        display: flex;
        max-width: 12.5rem;
        // max-height: rem;
        justify-content: center;
        flex: 1 1;
      }

      &:focus,
      &:focus-visible {
        outline: 0.5rem solid ${({ theme }) => theme.primaryColor};
      }
    }

    @media (min-width: 568px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      article {
        display: initial;
        height: auto;
        .description {
          display: none;
        }
      }
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;
